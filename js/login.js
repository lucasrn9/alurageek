import addFieldValidation from './addFieldValidation.js';
import validateForm from './validateForm.js';
import validators from './validators.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginForm = document.querySelector('#login__form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm([emailInput, passwordInput], validators)) {
    return;
  }
  window.alert('formulario enviado!');
});

addFieldValidation(emailInput);
addFieldValidation(passwordInput);
