import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import Menu from 'components/molecules/Menu';
import ChangeLanguage from 'components/molecules/ChangeLanguage';
import LoginUserName from 'components/atoms/LoginUserName';
import LogoutButton, { LogoutButtonProps } from 'components/atoms/LogoutButton';

const StyledHeader = styled.header`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  padding: 0 5px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 5px;
  height: 75px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    padding-right: 10px;
    border-right: 1px dotted;
  }

  button {
    margin-left: 10px;
  }
`;

export interface HeaderProps {
  logoutButton: LogoutButtonProps;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const [t] = useTranslation();

  return (
    <StyledHeader>
      <HeaderRow>
        <HeaderLeft>
          <Logo />
          <ChangeLanguage />
        </HeaderLeft>
        <HeaderRight>
          <LoginUserName name={t('organisms.header.loginUserName', { name: 'TestUser' })} />
          <LogoutButton {...props.logoutButton} />
        </HeaderRight>
      </HeaderRow>
      <Menu />
    </StyledHeader>
  );
};

export default Header;
