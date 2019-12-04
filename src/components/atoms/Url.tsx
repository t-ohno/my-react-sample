import React from 'react';
import styled from 'styled-components';
import BaseUrl, { BaseUrlProps, StyledBaseUrl } from 'components/atoms/BaseUrl';

export const StyledUrl = styled(StyledBaseUrl)`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface UrlProps extends BaseUrlProps {}

export default class Url extends BaseUrl<UrlProps> {
  render() {
    return <StyledUrl {...this.props} />;
  }
}
