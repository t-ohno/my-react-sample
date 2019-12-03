import React from 'react';
import ModalTemplate from 'components/templates/ModalTemplate';
import TextBox from 'components/atoms/TextBox';
import Button from 'components/atoms/Button';

interface Props {
  isOpen: boolean;
  textValue?: string;
  onAfterOpen?: () => void;
  onRequestClose: () => void;
}

type State = {
  textValue?: string;
};

export default class ChildModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      textValue: props.textValue
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.textValue !== nextProps.textValue) {
      this.setState({ textValue: nextProps.textValue });
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <ModalTemplate
        title="モーダルタイトル"
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Example"
      >
        <h2>Hello</h2>
        <div>I am a modal</div>
        <form>
          <TextBox value={this.state.textValue} onChange={this.handleChange} />
          <Button type="submit" onClick={this.props.onRequestClose}>
            OK
          </Button>
        </form>
      </ModalTemplate>
    );
  }
}
