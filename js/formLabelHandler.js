const formLabelHandler = (inputsArray) => {
  inputsArray.forEach((input) => {
    const inputLabel = input.labels[0];
    input.addEventListener('click', () => {
      inputLabel.classList.add('form__labelVisible');
    });
    input.addEventListener('blur', () => {
      const isInputEmpty = !input.value;
      if (isInputEmpty) {
        inputLabel.classList.remove('form__labelVisible');
      }
    });
  });
};

export default formLabelHandler;
