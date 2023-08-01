import addFieldValidation from './formsValidations/addFieldValidation.js';
import validators from './formsValidations/validators.js';
import validateForm from './formsValidations/validateForm.js';

const postProduct = async (product) => {
  const res = await fetch('http://localhost:3000/productsAll', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(product) });
  const postResponse = await res.json();
  return postResponse;
};

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
    // eslint-disable-next-line no-param-reassign
    input.value = '';
  });
  const postBody = {
    title: values.nome,
    price: values.preco,
    description: values.descricao,
    imgUrl: values.url,
    category: values.categoria,
  };
  await postProduct(postBody);
  window.alert('formulario enviado!');
});
