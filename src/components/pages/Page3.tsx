import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MessageLevel, Page3State } from 'app/types';
import Template from 'components/templates/AuthenticatedTemplate';
import ChildModal from 'components/pages/ChildModal';
import Button from 'components/atoms/Button';
import TextBox from 'components/atoms/TextBox';
import Password from 'components/atoms/Password';
import Number from 'components/atoms/Number';
import Email from 'components/atoms/Email';
import Tel from 'components/atoms/Tel';
import Url from 'components/atoms/Url';
import CheckBox from 'components/atoms/CheckBox';
import RadioButton from 'components/atoms/RadioButton';
import File from 'components/atoms/File';
import DatePicker from 'components/atoms/DatePicker';
import TimePicker from 'components/atoms/TimePicker';
import TextArea from 'components/atoms/TextArea';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0 20px;
  width: 100%;

  > span {
    display: inline-block;
    width: 400px;
    color: rgba(102, 102, 102, 1);
    text-align: right;

    & + * {
      margin-left: 10px;
    }
  }
`;

const RadioButtons = styled.div`
  display: flex;

  label + label {
    margin-left: 10px;
  }
`;

const Commands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px 5px 10px;
`;

interface Props {}

const Page3: React.FunctionComponent<Props> = () => {
  const [t] = useTranslation();
  const [isOpen, setOpen] = React.useState(false);

  const [textValue, setTextValue] = React.useState('Hello World.');
  const [passwordVlue, setPasswordVlue] = React.useState('password');
  const [numberValue, setNumberValue]: any = React.useState(1234567890);
  const [emailValue, setEmailValue] = React.useState('sample@example.com');
  const [telValue, setTelValue] = React.useState('03-1234-5678');
  const [urlVlue, setUrlValue] = React.useState('https://www.google.com/');
  const [checboxValue, setChecboxValue]: any = React.useState(true);
  const [radiobuttonValue, setRadiobuttonValue] = React.useState('1');
  const [fileValue, setFileValue] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [textareaValue, setTextareaValue] = React.useState('Hello World.');

  const state: Page3State = {
    textbox: {
      defaultValue: textValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value)
    },
    password: {
      name: 'password',
      defaultValue: passwordVlue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPasswordVlue(e.target.value)
    },
    number: {
      name: 'number',
      defaultValue: numberValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNumberValue(e.target.value)
    },
    email: {
      name: 'email',
      defaultValue: emailValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)
    },
    tel: {
      name: 'tel',
      defaultValue: telValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTelValue(e.target.value)
    },
    url: {
      name: 'url',
      defaultValue: urlVlue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUrlValue(e.target.value)
    },
    checkbox: {
      label: 'checkbox',
      defaultChecked: checboxValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setChecboxValue(e.target.value)
    },
    radiobutton1: {
      name: 'radiobutton',
      label: 'radio1',
      value: '1',
      defaultChecked: radiobuttonValue === '1',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRadiobuttonValue(e.target.value)
    },
    radiobutton2: {
      name: 'radiobutton',
      label: 'radio2',
      value: '2',
      defaultChecked: radiobuttonValue === '2',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRadiobuttonValue(e.target.value)
    },
    file: {
      name: 'file',
      label: 'Select a file:',
      defaultChecked: fileValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFileValue(e.target.value)
    },
    datepicker: {
      dateFormat: t('pages.page3.datePicker.dateFormat'),
      todayButton: t('pages.page3.datePicker.todayButton'),
      selected: selectedDate,
      onChange: (date: Date) => {
        setSelectedDate(date);
      }
    },
    timepicker: {
      dateFormat: t('pages.page3.timePicker.dateFormat'),
      timeFormat: t('pages.page3.timePicker.timeFormat'),
      timeCaption: t('pages.page3.timePicker.timeCaption'),
      selected: selectedTime,
      onChange: (time: Date) => {
        setSelectedTime(time);
      }
    },
    textarea: {
      defaultValue: textareaValue,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)
    }
  };

  return (
    <Template
      messageLevel={MessageLevel.INFO}
      visibleMessageBar={false}
      showMessageBar={() => {}}
      hideMessageBar={() => {}}
    >
      <Title>{t('pages.page3.title')}</Title>

      <ItemRow>
        <span>TextBox</span>
        <TextBox {...state.textbox} />
      </ItemRow>
      <ItemRow>
        <span>Password</span>
        <Password {...state.password} />
      </ItemRow>
      <ItemRow>
        <span>Number</span>
        <Number {...state.number} />
      </ItemRow>
      <ItemRow>
        <span>Email</span>
        <Email {...state.email} />
      </ItemRow>
      <ItemRow>
        <span>Tel</span>
        <Tel {...state.tel} />
      </ItemRow>
      <ItemRow>
        <span>Url</span>
        <Url {...state.url} />
      </ItemRow>
      <ItemRow>
        <span>File</span>
        <File {...state.file} />
      </ItemRow>
      <ItemRow>
        <span>CheckBox</span>
        <CheckBox {...state.checkbox} />
      </ItemRow>
      <ItemRow>
        <span>RadioButton</span>
        <RadioButtons>
          <RadioButton {...state.radiobutton1} />
          <RadioButton {...state.radiobutton2} />
        </RadioButtons>
      </ItemRow>
      <ItemRow>
        <span>DatePicker</span>
        <DatePicker {...state.datepicker} />
      </ItemRow>
      <ItemRow>
        <span>TimePicker</span>
        <TimePicker {...state.timepicker} />
      </ItemRow>
      <ItemRow>
        <span>TextArea</span>
        <TextArea {...state.textarea} />
      </ItemRow>

      <Commands>
        <ChildModal
          title={t('pages.page3.modal.title')}
          values={state}
          isOpen={isOpen}
          onRequestClose={() => setOpen(false)}
        />
        <Button onClick={() => setOpen(true)}>{t('pages.page3.buttonName')}</Button>
      </Commands>
    </Template>
  );
};

export default Page3;
