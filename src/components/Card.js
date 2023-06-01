export class Card {
  constructor(userId, {card, handleCardClick, handleDeleteClick,  deleteCard, handleLikeClick}) {
    this._handleCardClick = handleCardClick;
    this._cardSelector = card.cardSelector;
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._ownerId = card.ownerId;
    this._cardId = card.cardId;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._deleteCard = deleteCard;
    this._userId = userId
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    if(this._ownerId === this._userId) {
      return cardElement
    } else {
      cardElement.querySelector('.element__delete').remove()
      return cardElement
    }
  }

  createCard() {
    this._card = this._getTemplate();
    this._likesNumberElement = this._card.querySelector('.element__likes-number')
    this._setEventListeners();
    if(this.hasUser()) {
      this._toggleLike()
    }

    this._card.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._likesNumberElement.textContent = `${this._likes.length}`

    return this._card;
  }

  _addDeleteButtonListener() {
    if(this._card.querySelector('.element__delete')) {
      this._card.querySelector('.element__delete').addEventListener('click', () => {
        this._handleDeleteClick({
          card: this,
          cardId: this._cardId
        })
      })
    }
  }

  _setEventListeners() {
    this._likeElement = this._card.querySelector('.element__like-button')
    this._cardPhoto = this._card.querySelector('.element__photo');

    this._addDeleteButtonListener()
    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
    this._likeElement.addEventListener('click', () => {
      this._handleLikeClick(this, this._cardId)
    });
  }

  refreshLikesNumber(likes) {
    this._likes = likes;
    this._likesNumberElement.textContent = likes.length;
    this._toggleLike();
  }

  hasUser() {
    if(this._likes.some((like) => { return  like._id === this._userId})) {
      return true
    }
    return false
  }

  _toggleLike() {
    this._likeElement.classList.toggle('element__like-button_active')
  };

  deleteCardElement(cardId) {
    this._deleteCard(cardId);
    this._card = null;
    this._cardPhoto = null;
    this._likeElement = null;
  };
}
