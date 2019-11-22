import React, { FunctionComponent, useState } from "react";
import Template from "components/templates/AuthenticatedTemplate";
import DatePicker from "components/molecules/DatePicker";

export const Page3: FunctionComponent = () => {
  const [currentDate] = useState(new Date());
  const handleChange = () => {};

  return (
    <Template>
      <div>Page3</div>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={currentDate}
        onChange={handleChange}
      />
    </Template>
  );
};

export default Page3;
