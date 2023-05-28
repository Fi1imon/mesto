import {Popup} from "./Popup.js";

export class PopupDeleteCard extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup-delete__button');
  }

  open(card, cardId) {
    super.open();
    this._deleteFnc = () => {
      card.deleteCardElement(cardId);
      this.close()
    }
    this._submitButton.addEventListener('click', this._deleteFnc)
  }

  close() {
    super.close();
    this._submitButton.removeEventListener('click', this._deleteFnc)
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
