// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
const profilePopupElement = document.querySelector('.popup-profile');
const profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');

const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profileFormElement = profilePopupElement.querySelector('.popup__form');
const profileNameInput = profileFormElement.querySelector('.popup__input_position_top');
const jobInput = profileFormElement.querySelector('.popup__input_position_bottom');
const profileCloseButtonElement = profilePopupElement.querySelector('.popup__close-button');

const closeButtons = document.querySelectorAll('.popup__close-button')

//Функции закрытия и открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//Обработчик закрытия для всех попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    return closePopup(popup);
  });
});

//Обработчики закрытия и подтверждения формы профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Кнопка открытия попапа информации профиля
editButtonElement.addEventListener('click', openProfilePopup);
function openProfilePopup() {
  openPopup(profilePopupElement);
  profileNameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
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

const elementTemplate = document.querySelector('#element').content;
const elementsSection = document.querySelector('.elements');

const imagePopupElement = document.querySelector('.popup-image');
const imageNameElement = imagePopupElement.querySelector('.popup-image__name');
const imagePhotoElement = imagePopupElement.querySelector('.popup-image__photo');

//Создание карточки
function createCard(item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__name').textContent = item.name;
  cardPhotoElement.src = item.link;
  cardPhotoElement.alt = item.name;

  //Функциональность открытия попапа фото
  cardPhotoElement.addEventListener('click', () => {
    openPopup(imagePopupElement);

    imageNameElement.textContent = item.name;
    imagePhotoElement.src = item.link;
    imagePhotoElement.alt = item.name;
  });

  //Функциональность лайка
  const likeButtonCardElement = cardElement.querySelector('.element__like');
  likeButtonCardElement.addEventListener('click', () => {
    likeButtonCardElement.classList.toggle('element__like_active');
  });

  //Функциональность удаления
  const deleteButtonCardElement = cardElement.querySelector('.element__delete');
  deleteButtonCardElement.addEventListener('click', () => {
      cardElement.remove()
    }
  );
  return cardElement;
}

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
  initialCards.push(newItem);

  addCard(newItem);
};

//ПОПАП КАРТОЧКИ ФОТО
const popupNewItemElement = document.querySelector('.popup-item');
const newItemFormElement = popupNewItemElement.querySelector('.popup__form')

const addButtonElement = profileElement.querySelector('.profile__add-button');

const nameNewItemPopup = newItemFormElement.querySelector('.popup__input_position_top');
const linkNewItemPopup = newItemFormElement.querySelector('.popup__input_position_bottom');

//Открытие попапа добавления карточки
addButtonElement.addEventListener('click', () => {popupNewItemElement.classList.add('popup_opened')
});

//Подтверждение добавления карточки
newItemFormElement.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(nameNewItemPopup.value, linkNewItemPopup.value);

  closePopup(popupNewItemElement);

  evt.target.reset();
});

// Открытие просмотра фото из карточки
