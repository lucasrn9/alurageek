/* eslint-disable no-param-reassign */
export const validateLength = (text, min, max, errorMin, errorMax, errorElement) => {
  if (text.length < min) {
    errorElement.textContent = errorMin;
    errorElement.style.display = 'block';
    return false;
  }
  if (text.length > max) {
    errorElement.textContent = errorMax;
    errorElement.style.display = 'block';
    return false;
  }
  return true;
};

export const validateEmail = (email, errMsg, errElement) => {
  // - RFC2822 email format
  const validEmailRFC2822 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (!validEmailRFC2822.test(email)) {
    errElement.textContent = errMsg;
    errElement.style.display = 'block';
    return false;
  }
  return true;
};

export const validatePassword = (password, errMsg, errElement) => {
  // - at least 8 characters
  // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
  // - Can contain special characters
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!validPassword.test(password)) {
    errElement.textContent = errMsg;
    errElement.style.display = 'block';
    return false;
  }
  return true;
};

export const validateNome = (nome, errMsg, errElement) => {
  // - character from a to z
  // - upper or lower case
  // - character can have accent
  const validNome = /^[a-zA-ZÀ-ÿ\s]+$/;
  if (!validNome.test(nome)) {
    errElement.textContent = errMsg;
    errElement.style.display = 'block';
    return false;
  }
  return true;
};

export const validateUrl = (url, errMsg, errElement) => {
  // - url format
  const validUrl = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
  if (!validUrl.test(url)) {
    errElement.textContent = errMsg;
    errElement.style.display = 'block';
    return false;
  }
  return true;
};

export const validatePreco = (preco, errMsg, errElement) => {
  // - float number with 2 decimals
  const validPreco = /^\d+\.\d{2}$/;
  if (!validPreco.test(preco)) {
    errElement.textContent = errMsg;
    errElement.style.display = 'block';
    return false;
  }
  return true;
};
