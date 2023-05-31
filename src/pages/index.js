import './index.css';
import {Card} from "../scripts/Card.js";
import {FormValidator} from "../scripts/FormValidator.js";
import {Section} from "../scripts/Section.js";
import {PopupWithImage} from "../scripts/PopupWithImage.js";
import {PopupWithForm} from "../scripts/PopupWithForm.js";
import {UserInfo} from "../scripts/UserInfo.js";
import {validationConfig} from "../scripts/constants.js";
import {Api} from "../scripts/Api.js";
import {PopupWithConfirmation} from "../scripts/PopupWithConfirmation";


const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '1b376021-e410-4f6f-96c7-0ea2e231f4c4',
    'Content-Type': 'application/json'
  }
})

//Заполнение инормации пользователя при загрузке страницы
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
})

let userId
api.getUserInfo()
  .then((user) => {
    userInfo.setUserInfo({
      name: user.name,
      job: user.about,
      avatar: user.avatar
    });
    userId = user._id;
  })

//Форма обновления данных пользователя
const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  submit: (values) => {
    api.setUserInfo(values)
      .then((user) => {
        userInfo.setUserInfo({
          name: user.name,
          job: user.about,
          avatar: user.avatar
        })
      })
      .finally(() => profilePopup.loadingSubmitButton(false))
  }
})
profilePopup.setEventListeners()

//Заполнение полей попапа профиля
const profilePopupElement = document.querySelector('.popup-profile');

function setProfileValues(values) {
  profilePopupElement.querySelector('.popup__input_position_top').value = values.name;
  profilePopupElement.querySelector('.popup__input_position_bottom').value = values.job;
}

// Кнопка открытия попапа информации профиля
const editButtonElement = document.querySelector('.profile__edit-button');

function openProfilePopup() {
  setProfileValues(userInfo.getUserInfo())

  profilePopup.open()
}
editButtonElement.addEventListener('click', () => {
  openProfilePopup();
  profileEditValidation.buttonDisable()
});

//Попап увеличения фото
const popupWithImage = new PopupWithImage('.popup-image')
popupWithImage.setEventListeners()

//Попап удаления карточки
const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: '.popup-delete'
  })
popupDeleteCard.setEventListeners()

//Функция создания карточки
function createCard(item) {
  const card = new Card(
    userId,{
  card: {
      name: item.name,
      link: item.link,
      likes: item.likes,
      ownerId: item.owner._id,
      cardId: item._id,
      cardSelector: '#element'
      },
    handleCardClick: (name, link) => {
      popupWithImage.open({name, link});
    },
    handleDeleteClick: ({card, cardId}) => {
      popupDeleteCard.open(card, cardId)
    },
    deleteCard: (cardId) => {
      api.deleteCard(cardId)
        .then(() => uploadCardsFromServer())
    },
    handleLikeClick: (thisCard, cardId) => {
      if(thisCard.hasUser()) {
        api.removeLike(cardId)
          .then((card) => {
            thisCard.refreshLikesNumber(card.likes)
          })
      } else {
        api.setLike(cardId)
          .then((card) => {
            thisCard.refreshLikesNumber(card.likes)
          })
      }
    }
  });
  return  card.createCard()
}

//Выгрузка карточек при загрузке страницы
const elementsLoader = new Section(
  {
    renderer: (item) => {
      elementsLoader.addItem(createCard(item))
    }
  },
  '.elements'
);

function uploadCardsFromServer() {
  elementsLoader.removeElements()
  api.getInitialCards()
    .then((cards) => {
      elementsLoader.renderElements(cards)
    })
}
uploadCardsFromServer()

//Попап добавления карточки
const popupAddElement = new PopupWithForm({
  popupSelector: '.popup-item',
  submit: (values) => {
    api.addCard(values)
      .then(() => uploadCardsFromServer())
      .finally(() => popupAddElement.loadingSubmitButton(false))
  }
})
popupAddElement.setEventListeners()

//Слушатель кнопки открытия попапа добавления карточки
const addButtonElement = document.querySelector('.profile__add-button');

addButtonElement.addEventListener('click', () => {
  popupAddElement.open()
  newCardValidation.buttonDisable()
});

// Обновление аватара
const profileAvatarElement = document.querySelector('.profile__avatar-overlay')
profileAvatarElement.addEventListener('click', () => {
  newAvatarValidation.buttonDisable()
  popupNewAvatar.open()
})

const popupNewAvatar = new PopupWithForm({
  popupSelector: '.popup-avatar',
  submit: (values) => {
    api.uploadAvatar(values.url)
      .then((user) => {
        userInfo.setUserInfo({
          name: user.name,
          job: user.about,
          avatar: user.avatar
        })
      })
      .finally(() => popupNewAvatar.loadingSubmitButton(false))
  }
})
popupNewAvatar.setEventListeners()

//Валидация
const newItemElement = document.querySelector('.popup-item');
const profileElement = document.querySelector('.popup-profile');
const newAvatarElement = document.querySelector('.popup-avatar');

const newCardValidation = new FormValidator({
  validationClasses: validationConfig,
  formElement: newItemElement.querySelector('.popup__form')});
const profileEditValidation = new FormValidator({
  validationClasses: validationConfig,
  formElement: profileElement.querySelector('.popup__form')});
const newAvatarValidation = new FormValidator({
  validationClasses: validationConfig,
  formElement: newAvatarElement.querySelector('.popup__form')})

newAvatarValidation.enableValidation()
profileEditValidation.enableValidation();
newCardValidation.enableValidation();




