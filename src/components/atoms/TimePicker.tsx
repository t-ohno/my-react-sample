import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledTimePicker = styled(ReactDatePicker)`
  padding-left: 5px;
  width: 105px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }

    + button {
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }

      &::after {
        cursor: not-allowed;
      }
    }
  }
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
