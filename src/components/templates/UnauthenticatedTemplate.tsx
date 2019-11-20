import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const UnauthenticatedTemplate: FunctionComponent<Props> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default UnauthenticatedTemplate;
