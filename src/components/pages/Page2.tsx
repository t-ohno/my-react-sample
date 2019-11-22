import React, { FunctionComponent } from "react";
import Template from "components/templates/AuthenticatedTemplate";
import Button from "components/atoms/Button";

const Page2: FunctionComponent = () => {
  return (
    <Template>
      <div>Page2</div>
      <Button text="ボタン" />
    </Template>
  );
};

export default Page2;
