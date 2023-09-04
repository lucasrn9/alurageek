import addFieldValidation from './formsValidations/addFieldValidation.js';
import validators from './formsValidations/validators.js';
import validateForm from './formsValidations/validateForm.js';
import { postProduct } from './services/products/products.services.js';

const inputs = document.querySelectorAll('[validate]');
inputs.forEach((input) => {
  addFieldValidation(input);
});

const addProductForm = document.querySelector('#addProduct__form');

addProductForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateForm(inputs, validators)) {
    return;
  }
  const values = {};
  inputs.forEach((input) => {
    const { name } = input;
    const { value } = input;
    values[name] = value;
  });
  const postBody = {
    title: values.nome,
    price: values.preco,
    description: values.descricao,
    imgUrl: values.url,
    category: values.categoria,
  };
  try {
    await postProduct(postBody);
    window.location.reload();
    window.alert('formulario enviado!');
    inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });
  } catch {
    window.alert('Erro ao cadastrar produto');
  }
});
