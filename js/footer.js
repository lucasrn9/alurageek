import formLabelHandler from './formLabelHandler.js';
import addFieldValidation from './addFieldValidation.js';
import validateForm from './validateForm.js';
import validators from './validators.js';

const nomeInput = document.querySelector('#nome');
const messageInput = document.querySelector('#message');

formLabelHandler([nomeInput]);

addFieldValidation(nomeInput);
addFieldValidation(messageInput);

const footerForm = document.querySelector('#footer__form');

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm([nomeInput, messageInput], validators)) {
    return;
  }
  window.alert('formulario enviado!');
});
