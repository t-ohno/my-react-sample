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
  state: Page3State;
}

type State = {};

export default class ChildModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ModalTemplate
        title={this.props.title}
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Child Modal Example"
      >
        <form>
          <ItemRow>
            <span>TextBox</span>
            <TextBox {...this.props.state.textbox} />
          </ItemRow>
          <ItemRow>
            <span>Password</span>
            <Password {...this.props.state.password} />
          </ItemRow>
          <ItemRow>
            <span>Number</span>
            <Number {...this.props.state.number} />
          </ItemRow>
          <ItemRow>
            <span>Email</span>
            <Email {...this.props.state.email} />
          </ItemRow>
          <ItemRow>
            <span>Tel</span>
            <Tel {...this.props.state.tel} />
          </ItemRow>
          <ItemRow>
            <span>Url</span>
            <Url {...this.props.state.url} />
          </ItemRow>
          <ItemRow>
            <span>File</span>
            <File {...this.props.state.file} />
          </ItemRow>
          <ItemRow>
            <span>CheckBox</span>
            <CheckBox {...this.props.state.checkbox} />
          </ItemRow>
          <ItemRow>
            <span>RadioButton</span>
            <RadioButton {...this.props.state.radiobutton1} />
            <RadioButton {...this.props.state.radiobutton2} />
          </ItemRow>
          <ItemRow>
            <span>DatePicker</span>
            <DatePicker {...this.props.state.datepicker} popperPlacement="top-end" />
          </ItemRow>
          <ItemRow>
            <span>TimePicker</span>
            <TimePicker {...this.props.state.timepicker} />
          </ItemRow>
          <ItemRow>
            <span>TextArea</span>
            <TextArea {...this.props.state.textarea} />
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
