import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupPhoto = this._popup.querySelector('.popup-image__photo');
    this._photoCaption = this._popup.querySelector('.popup-image__name')
  }

  open({name, link}) {
    super.open();

    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    this._photoCaption.textContent = name;
  }
}
