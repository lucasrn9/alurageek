const validateForm = (inputs, validators) => {
  const fieldsValidation = [];
  inputs.forEach((input) => {
    const { value } = input;
    const { name } = input;
    const errorSpan = input.parentElement.parentElement.querySelector('.form__error');
    const isFieldValid = validators[name](value, errorSpan);
    if (!isFieldValid) {
      fieldsValidation.push(false);
    }
  });
  const areAllFieldsValid = fieldsValidation.every(((field) => field === true));
  return areAllFieldsValid;
};

export default validateForm;
