import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { BasePageProps } from 'app/types';
import MessageBar from 'components/organisms/MessageBar';
import BaseHeader from 'components/organisms/Header';
import BaseFooter from 'components/organisms/Footer';
import { LogoutButtonProps } from 'components/atoms/LogoutButton';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  border: 4px solid #0582dc;
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
`;

const Header = styled(BaseHeader)`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Footer = styled(BaseFooter)`
  grid-area: footer;
`;

interface Props extends BasePageProps {
  showMessageBar: () => void;
  hideMessageBar: () => void;
}

type State = {
  visibleMessageBar: boolean;
};

export default class AuthenticatedTemplate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visibleMessageBar: props.visibleMessageBar
    };
  }

  render() {
    const logoutButton: LogoutButtonProps = {
      onClick: () => (window.location.pathname = '/login')
    };

    return (
      <Wrapper>
        <Transition in={this.props.visibleMessageBar} timeout={1000}>
          {() =>
            this.props.visibleMessageBar && (
              <MessageBar message={this.props.messageBarValue} onClose={this.props.hideMessageBar} />
            )
          }
        </Transition>
        <Header logoutButton={logoutButton} />
        <Main>{this.props.children}</Main>
        <Footer />
      </Wrapper>
    );
  }
}
