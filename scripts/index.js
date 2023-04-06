// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
const profilePopupElement = document.querySelector('.popup-profile');
const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');

const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profileFormElement = profilePopupElement.querySelector('.popup__form');
const profileNameInput = profileFormElement.querySelector('.popup__input_position_top');
const jobInput = profileFormElement.querySelector('.popup__input_position_bottom');

const closeButtons = document.querySelectorAll('.popup__close-button');
const popupList = document.querySelectorAll('.popup');

//Заполнение полей попапа профиля
function fillProfilePopup() {
  profileNameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
};
fillProfilePopup();

//Функциональность закрытия по клику на оверлей
function closeOnOverlayClick(evt) {
  popupList.forEach((popup) => {
    if(evt.target === popup) {
      closePopup(popup)
    };
  });
};

//Функциональность закрытия на Esc
function closeOnEscape(evt) {
  popupList.forEach((popup) => {
    if(evt.key === 'Escape') {
      closePopup(popup)
    };
  });
};

//Функции закрытия и открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeOnOverlayClick)
  window.addEventListener('keydown', closeOnEscape)
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeOnEscape)
  popup.removeEventListener('mousedown', closeOnOverlayClick)
};

//Обработчик закрытия для всех попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click',() => {return closePopup(popup)});
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

//Создание карточки
const elementTemplate = document.querySelector('#element').content;
const elementsSection = document.querySelector('.elements');

function createCard(item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__name').textContent = item.name;
  cardPhotoElement.src = item.link;
  cardPhotoElement.alt = item.name;

  return cardElement;
}

//Делегирование взаимодействий с карточками
elementsSection.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like_active');
  };

  deletePhotoElement(evt);
  openPhotoPopup(evt);
});

//Функциональность открытия попапа с фото
const imagePopupElement = document.querySelector('.popup-image');
const imageNameElement = imagePopupElement.querySelector('.popup-image__name');
const imagePhotoElement = imagePopupElement.querySelector('.popup-image__photo');

function openPhotoPopup(evt) {
  if(evt.target.classList.contains('element__photo')) {
    openPopup(imagePopupElement);

    imageNameElement.textContent = evt.target.alt;
    imagePhotoElement.src = evt.target.src;
    imagePhotoElement.alt = evt.target.alt;
  };
};

//Функциональность удаления
function deletePhotoElement(evt) {
  if(evt.target.classList.contains('element__delete')) {
    const element = evt.target.closest('.element');

    element.remove();
  };
};

//Функция добавления карточки
function addCard(item) {
  const cardElement = createCard(item);
  elementsSection.prepend(cardElement);
};

//Выгрузка карточек при загрузке страницы
function loadAllElements() {
  for ( let card of initialCards) {
    addCard(card);
  };
};
loadAllElements();

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

//Функциональность сброса кнопки submit добавления карточки
function buttonReset(evt) {
  evt.submitter.setAttribute('disabled', 'true');
  addDisabledButtonClass(evt);
};

//Добавление класса со стилем для выключенной кнопки
function addDisabledButtonClass(evt) {
  evt.submitter.classList.add('popup__submit-button_disabled');
};

//Подтверждение добавления карточки
const newItemFormElement = popupNewItemElement.querySelector('.popup__form');
const nameNewItemPopup = newItemFormElement.querySelector('.popup__input_position_top');
const linkNewItemPopup = newItemFormElement.querySelector('.popup__input_position_bottom');

newItemFormElement.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(nameNewItemPopup.value, linkNewItemPopup.value);

  buttonReset(evt)

  closePopup(popupNewItemElement);

  evt.target.reset();
});
