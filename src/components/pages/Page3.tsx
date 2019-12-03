import React from 'react';
import { useTranslation } from 'react-i18next';
import Template from 'components/templates/AuthenticatedTemplate';
import styled from 'styled-components';
import ChildModal from 'components/pages/ChildModal';
import Button from 'components/atoms/Button';
import TextBox from 'components/atoms/TextBox';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

interface Props {}

const Page3: React.FunctionComponent<Props> = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState('Hello World.');
  const [t] = useTranslation();

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  return (
    <Template>
      <Title>{t('pages.page3.title')}</Title>
      <TextBox value={textValue} onChange={onTextChange} />
      <Button onClick={onOpenModal}>{t('pages.page3.buttonName')}</Button>
      <ChildModal textValue={textValue} isOpen={isOpen} onRequestClose={onCloseModal} />
    </Template>
  );
};

export default Page3;
