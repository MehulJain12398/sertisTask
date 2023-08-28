import { useState, useEffect } from "react";

const useFormValidation = (initialData, validationRules, isEdit = false, setIsEdit = () => {}) => {
  const [formUpdatedData, setFormUpdatedData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    const hasEmptyFields = Object.values(formUpdatedData).some((value) => value === "");
    const hasErrors = Object.values(formErrors).some((value) => value !== "");
    setDisableSubmit(hasEmptyFields || hasErrors || isEdit);
  }, [formUpdatedData, formErrors,isEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsEdit(false);
    setFormUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const validationRule = validationRules[name];
    console.log(validationRule);
    if (validationRule) {
      if (value.match(validationRule.regex)) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      } else {
        if(name === "phoneNumber" && value > 16){
          setFormErrors((prev) => ({
            ...prev,
            [name]: validationRule.maxLengthErrorMessage,
          }));
        }else
        setFormErrors((prev) => ({
          ...prev,
          [name]: validationRule.errorMessage,
        }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!formUpdatedData[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "Field is required",
      }));
    }
  };

  return {
    formUpdatedData,
    formErrors,
    disableSubmit,
    handleInputChange,
    handleBlur,
  };
};

export default useFormValidation;
