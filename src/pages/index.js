import './index.css';
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {validationConfig} from "../utils/constants.js";
import {Api} from "../components/Api.js";
import {PopupWithConfirmation} from "../components/PopupWithConfirmation";

//profile popup constants
const profilePopupElement = document.querySelector('.popup-profile');
const editButtonElement = document.querySelector('.profile__edit-button');
const profileTopInput = profilePopupElement.querySelector('.popup__input_position_top');
const profileBottomInput = profilePopupElement.querySelector('.popup__input_position_bottom');
//add item and avatar constants
const addButtonElement = document.querySelector('.profile__add-button');
const profileAvatarElement = document.querySelector('.profile__avatar-overlay');
const formValidators = {}


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

//Выгрузка карточек при загрузке страницы
const elementsLoader = new Section(
  {
    renderer: (item) => {
      elementsLoader.addItem(createCard(item))
    }
  },
  '.elements'
);

//
function handleSubmit(request, popup) {

  popup.toggleLoadingSubmitButton(true)
  request()
    .then(() => popup.close())
    .catch((err) => {
      console.log(`'catch' поймал ошибку: ${err}`)
    })
    .finally(() => profilePopup.toggleLoadingSubmitButton(false))
}

//Общий запрос для карточек и пользователя

let userId
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo({
      name: user.name,
      job: user.about,
      avatar: user.avatar
    });
    userId = user._id;
    elementsLoader.renderElements(cards.toReversed());
  })
  .catch((err) => {
    console.log(`'catch' поймал ошибку: ${err}`)
  })

//Форма обновления данных пользователя
const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  submit: (values) => {
    function submitProfile() {
      return api.setUserInfo(values)
        .then((user) => {
          userInfo.setUserInfo({
            name: user.name,
            job: user.about,
            avatar: user.avatar
          })
        })
    }
    handleSubmit(submitProfile, profilePopup)
  }
})
profilePopup.setEventListeners()

//Заполнение полей попапа профиля
function setProfileValues(values) {
  profileTopInput.value = values.name;
  profileBottomInput.value = values.job;
}

// Кнопка открытия попапа информации профиля
function openProfilePopup() {
  setProfileValues(userInfo.getUserInfo())
  formValidators['profileEdit'].resetValidation()
  profilePopup.open()
}
editButtonElement.addEventListener('click', () => {
  openProfilePopup();
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
        .then(() => {

        })
        .catch((err) => {
          console.log(`'catch' поймал ошибку: ${err}`)
        })
    },
    handleLikeClick: (thisCard, cardId) => {
      if(thisCard.hasUser()) {
        api.removeLike(cardId)
          .then((card) => {
            thisCard.refreshLikesNumber(card.likes)
          })
          .catch((err) => {
            console.log(`'catch' поймал ошибку: ${err}`)
          })
      } else {
        api.setLike(cardId)
          .then((card) => {
            thisCard.refreshLikesNumber(card.likes)
          })
          .catch((err) => {
            console.log(`'catch' поймал ошибку: ${err}`)
          })
      }
    }
  });
  return  card.createCard()
}

//Попап добавления карточки
const popupAddElement = new PopupWithForm({
  popupSelector: '.popup-item',
  submit: (values) => {
    function submitAddElement() {
      return api.addCard(values)
        .then((card) => {
          elementsLoader.addItem(createCard(card))
        })
    }
    handleSubmit(submitAddElement, popupAddElement)
  }
})
popupAddElement.setEventListeners()

//Слушатель кнопки открытия попапа добавления карточки
addButtonElement.addEventListener('click', () => {
  formValidators['addPhoto'].resetValidation()
  popupAddElement.open()
});

// Обновление аватара
profileAvatarElement.addEventListener('click', () => {
  formValidators['newAvatar'].resetValidation()
  popupNewAvatar.open()
})

const popupNewAvatar = new PopupWithForm({
  popupSelector: '.popup-avatar',
  submit: (values) => {

    function submitNewAvatar() {
      return api.uploadAvatar(values.url)
        .then((user) => {
          userInfo.setUserInfo({
            name: user.name,
            job: user.about,
            avatar: user.avatar
          })
        })
    }
    handleSubmit(submitNewAvatar, popupNewAvatar)
  }
});
popupNewAvatar.setEventListeners();

//Валидация
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator({
      validationClasses: config,
      formElement: formElement
    })
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig)

// const newCardValidation = new FormValidator({
//   validationClasses: validationConfig,
//   formElement: document.forms['addPhoto']});
// const profileEditValidation = new FormValidator({
//   validationClasses: validationConfig,
//   formElement: document.forms['profileEdit']});
// const newAvatarValidation = new FormValidator({
//   validationClasses: validationConfig,
//   formElement: document.forms['newAvatar']});
//
// newAvatarValidation.enableValidation();
// profileEditValidation.enableValidation();
// newCardValidation.enableValidation();




