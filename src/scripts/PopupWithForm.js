import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, submit}) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._formInputs = this._form.querySelectorAll('.popup__input')
  }

  _getInputValues() {
    const inputValues = {};
    this._formInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit(this._getInputValues())
      this.close()
    })
  }

  close() {
    super.close();
    this._form.reset()
  }
}
