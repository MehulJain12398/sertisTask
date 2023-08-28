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
    // Apply validation rules from the provided object
    const validationRule = validationRules[name];
    if (validationRule) {
      if (value.match(validationRule.regex)) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      } else {
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
        [name]: "Please fill this field",
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
