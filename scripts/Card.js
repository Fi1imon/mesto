export class Card {
  constructor(name, link, cardSelector, openPhotoPopup) {
    this._openPhotoPopup = openPhotoPopup;
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._card = this._getTemplate();
    this._setEventListeners()
    this._cardPhoto = this._card.querySelector('.element__photo');

    this._card.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;


    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCardElement()
    });
    this._card.querySelector('.element__photo').addEventListener('click', () => {
      this._openPhotoPopup(this._name, this._link)
    })
    this._card.querySelector('.element__like').addEventListener('click', () => {
      this._toggleLike()
    });
  }

  _toggleLike() {
    this._card.querySelector('.element__like').classList.toggle('element__like_active')
  };

  _deleteCardElement() {
    this._card.remove();
    this._card = null;
  };

  _closeOnEsc(evt) {
    if(evt.key === 'Escape') {
      document.querySelector('.popup-image').classList.remove('popup_opened');
      window.removeEventListener('keydown', this._closeOnEsc)
    }
  }
}
