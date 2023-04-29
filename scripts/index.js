import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
const profilePopupElement = document.querySelector('.popup-profile');
const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');

const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profileFormElement = profilePopupElement.querySelector('.popup__form');
const profileNameInput = profileFormElement.querySelector('.popup__input_position_top');
const jobInput = profileFormElement.querySelector('.popup__input_position_bottom');

const popupList = document.querySelectorAll('.popup');

//Заполнение полей попапа профиля
function fillProfilePopup() {
  profileNameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
};
fillProfilePopup();

//Функциональность закрытия на Esc
function closeOnEscape(evt) {
  popupList.forEach(popup => {
    if(evt.key === 'Escape') {
      closePopup(popup)
    };
  });
};

//Функции закрытия и открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeOnEscape)
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeOnEscape)
};

//Обработчик закрытия для всех попапов на кнопку и оверлей
function closeOnOverlay(evt, popup) {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(popup)
  };
};

function closeOnButton(evt, popup) {
  if(evt.target.classList.contains('popup__close-button')) {
    closePopup(popup)
  };
};

popupList.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    closeOnOverlay(evt, popup);
    closeOnButton(evt, popup);
  });
});

//Обработчики закрытия и подтверждения формы профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Кнопка открытия попапа информации профиля
editButtonElement.addEventListener('click', openProfilePopup);
function openProfilePopup() {
  fillProfilePopup();
  openPopup(profilePopupElement);
};

// Кнопка "Submit" попапа информации профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup(profilePopupElement);
};

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

//Функция создания карточки
function createCard(item) {
  const card = new Card(item.name, item.link, '#element', openPhotoPopup);
  return  card.createCard()
};

//Открытие попапа фото для класса
const popupImage = document.querySelector('.popup-image')
const popupImagePhoto = popupImage.querySelector('.popup-image__photo')
function openPhotoPopup(name, link) {
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  popupImage.querySelector('.popup-image__name').textContent = name;
  openPopup(popupImage);
};

//Функция добавления карточки
const elementsSection = document.querySelector('.elements')
function addCard(item) {
  elementsSection.prepend(createCard(item));
};

//Выгрузка карточек при загрузке страницы
(function loadAllElements() {
  initialCards.forEach((card) => {
    addCard(card);
  });
})()

//Добавление карточки
function addNewCard() {
  const newItem = {
    name: nameNewItemPopup.value,
    link: linkNewItemPopup.value
  };

  addCard(newItem);
};

//Открытие попапа добавления карточки
const popupNewItemElement = document.querySelector('.popup-item');
const addButtonElement = profileElement.querySelector('.profile__add-button');

addButtonElement.addEventListener('click', () => {
  openPopup(popupNewItemElement);
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

//Подтверждение добавления карточки
const newItemFormElement = popupNewItemElement.querySelector('.popup__form');
const nameNewItemPopup = newItemFormElement.querySelector('.popup__input_position_top');
const linkNewItemPopup = newItemFormElement.querySelector('.popup__input_position_bottom');

const newCardValidation = new FormValidator(validationElementsClasses, newItemFormElement)
const profileEditValidation = new FormValidator(validationElementsClasses, profileFormElement)
newCardValidation.enableValidation()
profileEditValidation.enableValidation()

newItemFormElement.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(nameNewItemPopup.value, linkNewItemPopup.value);
  newCardValidation.buttonReset()
  closePopup(popupNewItemElement);

  evt.target.reset();
});


