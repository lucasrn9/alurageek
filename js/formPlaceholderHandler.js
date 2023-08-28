const formPlaceholderHandler = (inputsArray) => {
  inputsArray.forEach((input) => {
    const placeholderOldValue = input.getAttribute('placeholder');
    input.addEventListener('click', () => {
      input.setAttribute('placeholder', '');
    });
    input.addEventListener('blur', () => {
      const isInputEmpty = !input.value;
      if (isInputEmpty) {
        input.setAttribute('placeholder', placeholderOldValue);
      }
    });
  });
};

export default formPlaceholderHandler;
