import React from 'react';
import styled from 'styled-components';
import { Page3State } from 'app/types';
import ModalTemplate, { TemplateProps } from 'components/templates/ModalTemplate';
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
import Button from 'components/atoms/Button';
import TextArea from 'components/atoms/TextArea';

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  > span {
    display: inline-block;
    width: 200px;
    text-align: right;

    & + * {
      margin-left: 10px;
    }
  }
`;

const Commands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px 5px 10px;
`;

interface Props extends TemplateProps {
  title: string;
  values: Page3State;
}

type State = {
  values: Page3State;
};

export default class ChildModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      values: props.values
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  render() {
    return (
      <ModalTemplate
        title={this.props.title}
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Example"
      >
        <form>
          <ItemRow>
            <span>TextBox</span>
            <TextBox {...this.state.values.textbox} onChange={this.handleChange} />
          </ItemRow>
          <ItemRow>
            <span>Password</span>
            <Password {...this.state.values.password} onChange={this.handleChange} />
          </ItemRow>
          <ItemRow>
            <span>Number</span>
            <Number {...this.state.values.number} onChange={this.handleChange} />
          </ItemRow>
          <ItemRow>
            <span>Email</span>
            <Email {...this.state.values.email} onChange={this.handleChange} />
          </ItemRow>
          <ItemRow>
            <span>Tel</span>
            <Tel {...this.state.values.tel} />
          </ItemRow>
          <ItemRow>
            <span>Url</span>
            <Url {...this.state.values.url} />
          </ItemRow>
          <ItemRow>
            <span>File</span>
            <File {...this.state.values.file} />
          </ItemRow>
          <ItemRow>
            <span>CheckBox</span>
            <CheckBox {...this.state.values.checkbox} />
          </ItemRow>
          <ItemRow>
            <span>RadioButton</span>
            <RadioButton {...this.state.values.radiobutton1} />
            <RadioButton {...this.state.values.radiobutton2} />
          </ItemRow>
          <ItemRow>
            <span>DatePicker</span>
            <DatePicker {...this.state.values.datepicker} />
          </ItemRow>
          <ItemRow>
            <span>TimePicker</span>
            <TimePicker {...this.state.values.timepicker} />
          </ItemRow>
          <ItemRow>
            <span>TextArea</span>
            <TextArea {...this.state.values.textarea} />
          </ItemRow>
          <Commands>
            <Button type="submit" onClick={this.props.onRequestClose}>
              OK
            </Button>
          </Commands>
        </form>
      </ModalTemplate>
    );
  }
}
