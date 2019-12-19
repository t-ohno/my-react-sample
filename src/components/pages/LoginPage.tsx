import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MessageLevel } from 'app/types';
import MessageBar from 'components/organisms/MessageBar';
import { StyledImg as BaseStyledImg } from 'components/atoms/Logo';
import LoginUsername from 'components/molecules/LoginUsername';
import LoginPassword from 'components/molecules/LoginPassword';
import { StyledLoginButton as BaseStyledLoginButton } from 'components/atoms/LoginButton';

const Wrapper = styled.form`
  display: grid;
  grid-template-rows: 1fr auto auto 1fr;
  grid-row-gap: 10px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border: 4px solid #0582dc;
  height: 100%;
`;

const Logo = styled(BaseStyledImg)`
  margin: 0 auto;
`;

const LoginButton = styled(BaseStyledLoginButton)`
  margin: 0 auto;
`;

const LoginPage: React.FunctionComponent = () => {
  const [t] = useTranslation();
  const [messageLevel] = useState(MessageLevel.ERR);
  const [message, setMessage] = useState('');
  const [visibleMessageBar, setVisibleMessageBar] = useState(false);

  const showMessageBar = (errors: object) => {
    const values: string[] = Object.entries(errors).map(([_name, errorMessage]) => errorMessage);
    if (values.length === 0) {
      return;
    }
    setMessage(values.join('\n'));
    setVisibleMessageBar(true);
  };

  const hideMessageBar = () => {
    setVisibleMessageBar(false);
  };

  return (
    <>
      <Transition in={visibleMessageBar} timeout={1000}>
        {() =>
          visibleMessageBar && <MessageBar messageLevel={messageLevel} message={message} onClose={hideMessageBar} />
        }
      </Transition>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async values => {
          console.log(JSON.stringify(values, null, 2));
          window.location.pathname = '/Page1';
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(t('validate.required', { fieldName: t('pages.loginPage.username.label') })),
          password: Yup.string().required(t('validate.required', { fieldName: t('pages.loginPage.password.label') }))
        })}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Wrapper onSubmit={handleSubmit}>
            <Logo src="/assets/images/logo.svg" alt="logo" />
            <LoginUsername
              label={t('pages.loginPage.username.label')}
              defaultValue={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && showMessageBar(errors)}
            <LoginPassword
              label={t('pages.loginPage.password.label')}
              defaultValue={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && showMessageBar(errors)}
            <LoginButton type="submit" disabled={isSubmitting} />
          </Wrapper>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
