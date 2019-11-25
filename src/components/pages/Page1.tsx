import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Template from "components/templates/AuthenticatedTemplate";
import BoxCounter from "components/molecules/BoxCounter";

const Page1: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template>
      <h1>{t("pages.page1.title")}</h1>
      <BoxCounter />
    </Template>
  );
};

export default Page1;
