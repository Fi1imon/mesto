import './index.css';
import {Card} from "../scripts/Card.js";
import {FormValidator} from "../scripts/FormValidator.js";
import {Section} from "../scripts/Section.js";
import {PopupWithImage} from "../scripts/PopupWithImage.js";
import {PopupWithForm} from "../scripts/PopupWithForm.js";
import {UserInfo} from "../scripts/UserInfo.js";
import {initialCards} from '../scripts/constants.js';
import {validationConfig} from "../scripts/constants.js";


// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
const profilePopupElement = document.querySelector('.popup-profile');
const editButtonElement = document.querySelector('.profile__edit-button');

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
})

const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  submit: (values) => {
    userInfo.setUserInfo({
      name: values['name'],
      job: values['job']
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

//Открытие попапа фото для класса
const popupWithImage = new PopupWithImage('.popup-image')
popupWithImage.setEventListeners()

//Функция создания карточки
function createCard(item) {
  const card = new Card(
    item.name,
    item.link,
    '#element',
    {handleCardClick: (name, link) => {
        popupWithImage.open({name, link});
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
      name: values['title'],
      link: values['url']
    }));
  }
})
popupAddElement.setEventListeners()

const addButtonElement = document.querySelector('.profile__add-button');

addButtonElement.addEventListener('click', () => {
  popupAddElement.open()
  newCardValidation.buttonDisable()
});

//Валидация
const newItemElement = document.querySelector('.popup-item');
const profileElement = document.querySelector('.popup-profile');

const newCardValidation = new FormValidator({
  validationClasses: validationConfig,
  formElement: newItemElement.querySelector('.popup__form')});
const profileEditValidation = new FormValidator({
  validationClasses: validationConfig,
  formElement: profileElement.querySelector('.popup__form')});
profileEditValidation.enableValidation();
newCardValidation.enableValidation();




