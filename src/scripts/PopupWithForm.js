import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, submit}) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._formInputs = this._form.querySelectorAll('.popup__input')
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._loadingButton = this._popup.querySelector('.popup__loading-button');
  }

  _getInputValues() {
    const inputValues = {};
    this._formInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues
  }

  loadingSubmitButton(isLoading) {
    if(isLoading) {
      this._submitButton.classList.add('popup__submit-button_hidden');
      this._loadingButton.classList.add('popup__loading-button_visible');
    } else {
      this._submitButton.classList.remove('popup__submit-button_hidden');
      this._loadingButton.classList.remove('popup__loading-button_visible');
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this.loadingSubmitButton(true)
      this._submit(this._getInputValues())
      this.close()
    })
  }

  close() {
    super.close();
    this._form.reset()
  }
}
