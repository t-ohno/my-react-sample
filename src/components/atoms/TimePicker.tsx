import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledTimePicker = styled(ReactDatePicker)`
  padding-left: 5px;
  width: 105px;
  min-height: 30px;
  font-size: 1em;
`;

export interface TimePickerProps extends ReactDatePickerProps {}

export default class TimePicker extends React.Component<TimePickerProps> {
  static defaultProps = {
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 1,
    timeCaption: 'Time',
    isClearable: true
  };

  render() {
    return <StyledTimePicker {...this.props} />;
  }
}
