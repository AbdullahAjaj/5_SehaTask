import React, { Children, useState } from "react";
import { formContext } from "./Contexts";

const FormProvider = () => {
  const [whoFormVisible, setWhoFormVisible] = useState("show");

  function handleCancelClick() {
    setWhoFormVisible("show");
  }
  function handleAddNewClick() {
    setWhoFormVisible("new");
  }

  return (
    <formContext.Provider
      value={{
        whoFormVisible,
        handleCancelClick,
        handleAddNewClick,
      }}
    >
      {Children}
    </formContext.Provider>
  );
};

export default FormProvider;
