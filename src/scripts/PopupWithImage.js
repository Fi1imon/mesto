import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);

  }

  open({name, link}) {
    super.open();
    this._popupPhoto = this._popup.querySelector('.popup-image__photo')

    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    this._popup.querySelector('.popup-image__name').textContent = name;
  }
}
