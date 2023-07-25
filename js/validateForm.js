const validateForm = (inputs, validators) => {
  inputs.forEach((input) => {
    const { value } = input;
    const { name } = input;
    const errorSpan = input.parentElement.parentElement.querySelector('.form__error');
    return validators[name](value, errorSpan);
  });
};

export default validateForm;
