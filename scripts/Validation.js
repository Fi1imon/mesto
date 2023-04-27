export class FormValidation {
  constructor(validationClasses, formElement) {
    this._validationClasses = validationClasses;
    this._formElement = formElement;
  }

  //Отображение ERROR сообщения
  _showErrorMessage(inputElement, validationMessage) {
    this._formElement.querySelector(`.${inputElement.id}-error`).textContent = validationMessage;
    inputElement.classList.add(this._validationClasses.inputErrorClass);
  };

//Скрытие ERROR сообщения
  _hideErrorMessage(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = '';
    inputElement.classList.remove(this._validationClasses.inputErrorClass);
  };

//Проверка полей ввода в форме на валидность
  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid
    });
  };

//Переключение активности кнопки
  _toggleButton() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._validationClasses.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'true')
    } else {
      this._buttonElement.classList.remove(this._validationClasses.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled')
    };
  };

//Проверка формы на валидность
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement, inputElement.validationMessage);
    } else {
      this._hideErrorMessage(inputElement);
    }
  };

//Назначение слушателей на форму и проверка состояния кнопки
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationClasses.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationClasses.submitButtonSelector);

    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButton(inputElement);
      });
    });
    this._formElement.addEventListener
  };

  enableValidation() {
    this._setEventListeners()
  };

  _addDisabledButtonClass() {
    this._buttonElement.classList.add('popup__submit-button_disabled')
  }

  _buttonReset() {
    this._buttonElement.setAttribute('disabled', 'true');
    this._addDisabledButtonClass()
  }

}

export class NewItemFormValidation extends FormValidation {
  constructor(validationClasses, formElement) {
    super(validationClasses, formElement);
  }
  enableValidation() {
    super._setEventListeners();
    this._formElement.addEventListener('submit', () => {
      this._buttonReset()
    })
  }
}




