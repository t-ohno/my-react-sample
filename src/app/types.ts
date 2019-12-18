import { TextBoxProps } from 'components/atoms/TextBox';
import { PasswordProps } from 'components/atoms/Password';
import { NumberProps } from 'components/atoms/Number';
import { EmailProps } from 'components/atoms/Email';
import { TelProps } from 'components/atoms/Tel';
import { UrlProps } from 'components/atoms/Url';
import { CheckBoxProps } from 'components/atoms/CheckBox';
import { RadioButtonProps } from 'components/atoms/RadioButton';
import { FileProps } from 'components/atoms/File';
import { DatePickerProps } from 'components/atoms/DatePicker';
import { TimePickerProps } from 'components/atoms/TimePicker';
import { TextAreaProps } from 'components/atoms/TextArea';

export type Language = 'en' | 'ja';

export type AppState = { language: Language };

export type Action = {
  type: string;
  payload: any;
};

export interface TooltipProps {
  tooltipContent?: React.ReactChild | React.ReactChild[];
}

export enum MessageLevel {
  INFO,
  WARN,
  ERR
}

export interface BasePageProps {
  messageLevel: MessageLevel;
  messageBarValue?: string;
  visibleMessageBar: boolean;
}

export type Page3State = {
  textbox: TextBoxProps;
  password: PasswordProps;
  number: NumberProps;
  email: EmailProps;
  tel: TelProps;
  url: UrlProps;
  checkbox: CheckBoxProps;
  radiobutton1: RadioButtonProps;
  radiobutton2: RadioButtonProps;
  file: FileProps;
  datepicker: DatePickerProps;
  timepicker: TimePickerProps;
  textarea: TextAreaProps;
};

export type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type MenuChildItem = {
  label: string;
  gamen?: string;
  param?: string;
  enabled: boolean;
  to: string;
};

export type MenuItem = {
  label: string;
  subtitle: string;
  children?: MenuChildItem[];
};
