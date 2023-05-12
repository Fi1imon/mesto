export class Card {
  constructor(name, link, cardSelector, {handleCardClick}) {
    this._handleCardClick = handleCardClick;
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

    this._card.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;


    return this._card;
  }

  _setEventListeners() {
    this._likeElement = this._card.querySelector('.element__like')
    this._cardPhoto = this._card.querySelector('.element__photo');

    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCardElement()
    });
    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
    this._likeElement.addEventListener('click', () => {
      this._toggleLike()
    });
  }

  _toggleLike() {
    this._likeElement.classList.toggle('element__like_active')
  };

  _deleteCardElement() {
    this._card.remove();
    this._card = null;
    this._cardPhoto = null;
    this._likeElement = null;
  };
}
