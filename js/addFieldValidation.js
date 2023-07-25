import validators from './validators.js';

const addFieldValidation = (field) => {
  field.addEventListener('blur', (e) => {
    const { value } = e.target;
    const { name } = field;
    const errorSpan = e.target.parentElement.parentElement.querySelector('.form__error');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    validators[name](value, errorSpan);
  });

  field.addEventListener('invalid', (e) => {
    e.preventDefault();
    const fieldErrorElement = e.target.parentElement.parentElement.querySelector('.form__error');
    fieldErrorElement.textContent = 'Campo Invalido';
    fieldErrorElement.style.display = 'block';
  });
};

export default addFieldValidation;
