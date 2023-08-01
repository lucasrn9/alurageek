/* eslint-disable no-param-reassign */
import {
  validateLength, validateEmail, validatePassword, validateNome, validateUrl, validatePreco,
} from './stringValidations.js';

const emailInputValidator = (email, errorSpan) => {
  if (!validateLength(email, 2, 50, 'Email muito curto!', 'Email muito longo!', errorSpan)) {
    return false;
  }
  if (!validateEmail(email, 'Email invalido', errorSpan)) {
    return false;
  }
  return true;
};

const passwordInputValidator = (password, errorSpan) => {
  if (!validateLength(password, 8, 50, 'A senha deve ter no minimo 8 characteres', 'Senha muito longa!', errorSpan)) {
    return false;
  }
  if (!validatePassword(password, 'Senha invalida ! A senha deve conter pelo menos: 1 letra maiuscula, 1 letra minuscula e um numero', errorSpan)) {
    return false;
  }
  return true;
};

const nomeInputValidator = (nome, errorSpan) => {
  if (!validateLength(nome, 2, 100, 'O nome deve ter no minimo 2 characteres', 'O nome deve ter no maximo 100 characteres!', errorSpan)) {
    return false;
  }
  if (!validateNome(nome, 'Por favor insira um nome valido, sem numeros ou caracteres especiais', errorSpan)) {
    return false;
  }
  return true;
};

const messageInputValidator = (message, errorSpan) => {
  if (!validateLength(message, 4, 400, 'A mensagem deve ter no minimo 4 characteres', 'A mensagem deve ter no maximo 400 characteres!', errorSpan)) {
    return false;
  }
  return true;
};

const urlInputValidator = (url, errorSpan) => {
  if (!validateLength(url, 4, 400, 'A URL deve ter no minimo 4 characteres', 'A  deve ter no maximo 400 characteres!', errorSpan)) {
    return false;
  }
  if (!validateUrl(url, 'URL inválida', errorSpan)) {
    return false;
  }
  return true;
};

const categoriaInputValidator = (categoria, errorSpan) => {
  if (!validateLength(categoria, 2, 40, 'A categoria deve ter no minimo 2 characteres', 'A  categoria deve ter no maximo 40 characteres!', errorSpan)) {
    return false;
  }
  return true;
};

const precoInputValidator = (preco, errorSpan) => {
  if (preco.length === 0) {
    errorSpan.textContent = 'O campo não pode estar vazio';
    errorSpan.style.display = 'block';
    return false;
  }
  if (!validatePreco(preco, 'formato invalido! utilize "ponto" ao invés de "virgula", não utilize R$ ou $. Exemplo valido: 1.99', errorSpan)) {
    return false;
  }
  return true;
};

const descricaoInputValidator = (descricao, errorSpan) => {
  if (!validateLength(descricao, 4, 400, 'A descrição deve ter no minimo 4 characteres', 'A descrição deve ter no maximo 400 characteres!', errorSpan)) {
    return false;
  }
  return true;
};

const validators = {
  email: emailInputValidator,
  password: passwordInputValidator,
  nome: nomeInputValidator,
  message: messageInputValidator,
  url: urlInputValidator,
  categoria: categoriaInputValidator,
  preco: precoInputValidator,
  descricao: descricaoInputValidator,
};

export default validators;
