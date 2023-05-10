import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {Section} from "./Section.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {UserInfo} from "./UserInfo.js";

// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
const profilePopupElement = document.querySelector('.popup-profile');
const editButtonElement = document.querySelector('.profile__edit-button');

const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job'
})

const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  submit: (values) => {
    userInfo.setUserInfo({
      name: values[0],
      job: values[1]
    })
  }
})
profilePopup.setEventListeners()

//Заполнение полей попапа профиля
function setProfileValues(values) {
  profilePopupElement.querySelector('.popup__input_position_top').value = values.name;
  profilePopupElement.querySelector('.popup__input_position_bottom').value = values.job;
}
setProfileValues(userInfo.getUserInfo())

// Кнопка открытия попапа информации профиля
editButtonElement.addEventListener('click', openProfilePopup);
function openProfilePopup() {
  setProfileValues(userInfo.getUserInfo())

  profilePopup.open()
}

//КАРТОЧКИ ФОТО
const initialCards = [
  {
    name: 'Яркая улица',
    link: './images/street.png'
  },
  {
    name: 'Горы',
    link: './images/mountain.png'
  },
  {
    name: 'Белый мишка',
    link: './images/white_bear.png'
  },
  {
    name: 'Поцелуй',
    link: './images/kiss.png'
  },
  {
    name: 'Машина',
    link: './images/porsche.png'
  },
  {
    name: 'Цветочки на ветке',
    link: './images/branch.png'
  }
];

//Открытие попапа фото для класса
const popupWithImage = new PopupWithImage('.popup-image')

//Функция создания карточки
function createCard(item) {
  const card = new Card(
    item.name,
    item.link,
    '#element',
    {handleCardClick: () => {
        popupWithImage.open({
          name: item.name,
          link: item.link}),
        popupWithImage.setEventListeners()
      }});
  return  card.createCard()
};

//Выгрузка карточек при загрузке страницы

const elementsLoader = new Section(
  {
    renderer: (item) => {
      elementsLoader.addItem(createCard(item))
    }
  },
  '.elements'
);
elementsLoader.renderElements(initialCards)

//Попап добавления карточки
const popupAddElement = new PopupWithForm({
  popupSelector: '.popup-item',
  submit: (values) => {
    elementsLoader.addItem(
      createCard({
      name: values[0],
      link: values[1]
    }));
    newCardValidation.buttonReset()
  }
})
popupAddElement.setEventListeners()

const addButtonElement = document.querySelector('.profile__add-button');

addButtonElement.addEventListener('click', () => {
  popupAddElement.open()
});

//Валидация
const validationElementsClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input-error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled'
};

const newItemElement = document.querySelector('.popup-item');
const profileElement = document.querySelector('.popup-profile');

const newCardValidation = new FormValidator({
  validationClasses: validationElementsClasses,
  formElement: newItemElement.querySelector('.popup__form')});
const profileEditValidation = new FormValidator({
  validationClasses: validationElementsClasses,
  formElement: profileElement.querySelector('.popup__form')});
profileEditValidation.enableValidation();
newCardValidation.enableValidation();




