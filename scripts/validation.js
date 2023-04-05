validationElementsClasses ={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input-error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled'
};

//Отображение ERROR сообщения
const showErrorMessage = (formElement, inputElement, validationMessage, classes) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = validationMessage;
  inputElement.classList.add(classes.inputErrorClass);
};

//Скрытие ERROR сообщения
const hideErrorMessage = (formElement, inputElement, classes) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = '';
  inputElement.classList.remove(classes.inputErrorClass);
};

//Проверка полей ввода в форме на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid
  });
};

//Переключение активности кнопки
const toggleButton = (inputList, buttonElement, classes) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(classes.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true')
  } else {
    buttonElement.classList.remove(classes.inactiveButtonClass);
    buttonElement.removeAttribute('disabled')
  };
};

//Проверка формы на валидность
const isValid = (formElement, inputElement, classes) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, inputElement.validationMessage, classes);
  } else {
    hideErrorMessage(formElement, inputElement, classes);
  }
};

//Назначение слушателей на форму и проверка состояния кнопки
const setEventListeners = (formElement, classes) => {
  const inputList = Array.from(formElement.querySelectorAll(classes.inputSelector));
  const buttonElement = formElement.querySelector(classes.submitButtonSelector);

  toggleButton(inputList, buttonElement, classes);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, classes);
      toggleButton(inputList, buttonElement, classes);
    });
  });
};

//Создание массива филдсетов
const enableValidation = (classes) => {
  const formList = Array.from(document.querySelectorAll(classes.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, classes);
    });
};

enableValidation(validationElementsClasses);
