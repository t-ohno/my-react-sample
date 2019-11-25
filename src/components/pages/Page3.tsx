import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Template from "components/templates/AuthenticatedTemplate";
import Button from "components/atoms/Button";

export const Page3: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template>
      <h1>{t("pages.page3.title")}</h1>
      <Button text={t("pages.page3.buttonName")} />
    </Template>
  );
};

export default Page3;
