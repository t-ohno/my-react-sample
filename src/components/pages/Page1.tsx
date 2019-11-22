import React, { FunctionComponent } from "react";
import Template from "components/templates/AuthenticatedTemplate";
import BoxCounter from "components/molecules/BoxCounter";

const Page1: FunctionComponent = () => {
  return (
    <Template>
      <BoxCounter />
    </Template>
  );
};

export default Page1;
