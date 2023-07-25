import addFieldValidation from './addFieldValidation.js';
import validators from './validators.js';
import validateForm from './validateForm.js';

const inputs = document.querySelectorAll('[validate]');
inputs.forEach((input) => {
  addFieldValidation(input);
});

const addProductForm = document.querySelector('#addProduct__form');

addProductForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm(inputs, validators)) {
    return;
  }
  window.alert('formulario enviado!');
});
