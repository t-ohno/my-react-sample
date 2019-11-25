import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Template from "components/templates/AuthenticatedTemplate";
import DatePicker from "components/molecules/DatePicker";
import Button from "components/atoms/Button";

const Page2: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template>
      <h1>{t("pages.page2.title")}</h1>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={new Date()}
        onChange={() => {}}
      />
      <Button text={t("pages.page2.buttonName")} />
    </Template>
  );
};

export default Page2;
