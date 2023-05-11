import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, submit}) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputValues = {};
  }

  _getInputValues() {
    this._form.querySelectorAll('.popup__input').forEach((input, id) => {
      this._inputValues[id] = input.value;
    })
    return this._inputValues
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
