import formLabelHandler from './formLabelHandler.js';
import formPlaceholderHandler from './formPlaceholderHandler.js';
import addFieldValidation from './formsValidations/addFieldValidation.js';
import validateForm from './formsValidations/validateForm.js';
import validators from './formsValidations/validators.js';

const nomeInput = document.querySelector('#nome');
const messageInput = document.querySelector('#message');

formLabelHandler([nomeInput]);
formPlaceholderHandler([nomeInput]);

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
