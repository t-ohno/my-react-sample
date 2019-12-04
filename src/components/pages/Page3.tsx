import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Template from 'components/templates/AuthenticatedTemplate';
import ChildModal from 'components/pages/ChildModal';
import Button from 'components/atoms/Button';
import TextBox, { TextBoxProps } from 'components/atoms/TextBox';
import Password, { PasswordProps } from 'components/atoms/Password';
import Number, { NumberProps } from 'components/atoms/Number';
import Email, { EmailProps } from 'components/atoms/Email';
import Tel, { TelProps } from 'components/atoms/Tel';
import Url, { UrlProps } from 'components/atoms/Url';
import TextArea from 'components/atoms/TextArea';
import CheckBox, { CheckBoxProps } from 'components/atoms/CheckBox';
import RadioButton, { RadioButtonProps } from 'components/atoms/RadioButton';
import File, { FileProps } from 'components/atoms/File';
import DatePicker, { DatePickerProps } from 'components/atoms/DatePicker';
import TimePicker, { TimePickerProps } from 'components/atoms/TimePicker';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const RadioButtons = styled.div`
  display: flex;

  label + label {
    margin-left: 10px;
  }
`;

interface Props {}

const Page3: React.FunctionComponent<Props> = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState('Hello World.');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
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

  const textbox: TextBoxProps = {
    defaultValue: textValue,
    onChange: onTextChange
  };
  const password: PasswordProps = {
    name: 'password',
    defaultValue: 'password'
  };
  const number: NumberProps = {
    name: 'number',
    defaultValue: 1234567890
  };
  const email: EmailProps = {
    name: 'email',
    defaultValue: 'sample@example.com'
  };
  const tel: TelProps = {
    name: 'tel',
    defaultValue: '03-1234-5678'
  };
  const url: UrlProps = {
    name: 'url',
    defaultValue: 'https://www.google.com/'
  };
  const checbox: CheckBoxProps = {
    label: 'checkbox',
    defaultChecked: true
  };
  const radiobutton1: RadioButtonProps = {
    name: 'radiobutton',
    label: 'radio1',
    value: 1,
    defaultChecked: true
  };
  const radiobutton2: RadioButtonProps = {
    name: 'radiobutton',
    label: 'radio2',
    value: 2
  };
  const file: FileProps = {
    name: 'file',
    label: 'Select a file:'
  };
  const datepicker: DatePickerProps = {
    dateFormat: t('pages.page3.datePicker.dateFormat'),
    todayButton: t('pages.page3.datePicker.todayButton'),
    selected: selectedDate,
    onChange: (date: Date) => {
      setSelectedDate(date);
    }
  };
  const timepicker: TimePickerProps = {
    dateFormat: t('pages.page3.timePicker.dateFormat'),
    timeFormat: t('pages.page3.timePicker.timeFormat'),
    timeCaption: t('pages.page3.timePicker.timeCaption'),
    selected: selectedTime,
    onChange: (time: Date) => {
      setSelectedTime(time);
    }
  };

  return (
    <Template>
      <Title>{t('pages.page3.title')}</Title>
      <TextBox {...textbox} />
      <Password {...password} />
      <Number {...number} />
      <Email {...email} />
      <Tel {...tel} />
      <Url {...url} />
      <File {...file} />
      <DatePicker {...datepicker} />
      <TimePicker {...timepicker} />
      <TextArea />
      <CheckBox {...checbox} />
      <RadioButtons>
        <RadioButton {...radiobutton1} />
        <RadioButton {...radiobutton2} />
      </RadioButtons>
      <ChildModal
        title={t('pages.page3.modal.title')}
        textValue={textValue}
        isOpen={isOpen}
        onRequestClose={onCloseModal}
      />
      <Button onClick={onOpenModal}>{t('pages.page3.buttonName')}</Button>
    </Template>
  );
};

export default Page3;
