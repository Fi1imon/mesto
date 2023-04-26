export class Card {
  constructor(name, link, cardSelector) {
    this._cardSelector = cardSelector
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement
  }

  _setEventListeners() {
    this._deletePhotoElement()
    this._openPhotoPopup()
    this._toggleLike()
  }

  _toggleLike() {
    this._likeButton = this._card.querySelector('.element__like')
    this._likeButton.addEventListener('click', evt => {
      evt.target.classList.toggle('element__like_active')
    })
  };

  _deletePhotoElement() {
    this._deleteButton = this._card.querySelector('.element__delete')
    this._deleteButton.addEventListener('click', evt => {
      evt.target.closest('.element').remove()
    })
  };

  _openPhotoPopup() {
    this._photoElement = this._card.querySelector('.element__photo')
    this._photoElement.addEventListener('click', evt => {
      this._popupImage = document.querySelector('.popup-image');
      this._popupImagePhoto = this._popupImage.querySelector('.popup-image__photo')
      window.addEventListener('keydown', this._closeOnEsc)

      this._popupImage.classList.add('popup_opened');
      this._popupImage.querySelector('.popup-image__name').textContent = evt.target.alt;
      this._popupImagePhoto.src = evt.target.src;
      this._popupImagePhoto.alt = evt.target.alt;
    });
  };

  _closeOnEsc(evt) {
    if(evt.key === 'Escape') {
      document.querySelector('.popup-image').classList.remove('popup_opened');
      window.removeEventListener('keydown', this._closeOnEsc)
    }
  }

  _

  createCard() {
    this._card = this._getTemplate();
    this._setEventListeners()
    this._cardPhoto = this._card.querySelector('.element__photo');

    this._card.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;


    return this._card;
  }
}
