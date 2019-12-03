import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Template from 'components/templates/AuthenticatedTemplate';
import DatePicker from 'components/atoms/DatePicker';
import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/CheckBox';
import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const Page2: FunctionComponent = () => {
  const [t] = useTranslation();

  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const handleChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Template>
      <Title>{t('pages.page2.title')}</Title>
      <CheckBox label="チェックボックス" />
      <DatePicker dateFormat={t('pages.page2.datePicker.dateFormat')} selected={selectedDate} onChange={handleChange} />
      <Button>{t('pages.page2.buttonName')}</Button>
    </Template>
  );
};

export default Page2;
