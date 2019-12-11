import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledDatePicker = styled(ReactDatePicker)`
  padding-left: 5px;
  width: 125px;
  min-height: 25px;
  font-size: 1rem;
`;

export interface DatePickerProps extends ReactDatePickerProps {}

export default class DatePicker extends React.Component<DatePickerProps> {
  static defaultProps = {
    isClearable: true
  };

  render() {
    return <StyledDatePicker {...this.props} />;
  }
}
