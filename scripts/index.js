// ПОПАП ИНФОРМАЦИИ ПРОФИЛЯ
let popupElement = document.querySelector('.popup-profile');
let profileElement = document.querySelector('.profile');
const editButtonElement = profileElement.querySelector('.profile__edit-button');

let profileNameElement = profileElement.querySelector('.profile__name');
let profileJobElement = profileElement.querySelector('.profile__job');

let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_position_top');
let jobInput = formElement.querySelector('.popup__input_position_bottom');
const closeButtonElement = popupElement.querySelector('.popup__close-button');

// Кнопка открытия попапа информации профиля
editButtonElement.addEventListener('click', openPopup);
function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
  formElement.addEventListener('submit', handleFormSubmit);
  closeButtonElement.addEventListener('click', closePopup);
};

// Кнопка закрытия попапа информации профиля
function closePopup() {
  popupElement.classList.remove('popup_opened');
  nameInput.value = '';
  jobInput.value = '';
};

// Кнопка "Submit" попапа информации профиля
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup();
};

//КАРТОЧКИ ФОТО
const initialCards = [
  {
    name: 'Цветочки на ветке',
    link: './images/branch.png'
  },
  {
    name: 'Машина',
    link: './images/porsche.png'
  },
  {
    name: 'Поцелуй',
    link: './images/kiss.png'
  },
  {
    name: 'Белый мишка',
    link: './images/white_bear.png'
  },
  {
    name: 'Горы',
    link: './images/mountain.png'
  },
  {
    name: 'Яркая улица',
    link: './images/street.png'
  }
];

let elementTemplate = document.querySelector('#element').content;
let elementsElement = document.querySelector('.elements');

//Выгрузка карточек при загрузке страницы
function loadAllElements() {
  for ( let card of initialCards) {
    let elementElement = elementTemplate.querySelector('.element').cloneNode(true);

    elementElement.querySelector('.element__name').textContent = card.name;
    elementElement.querySelector('.element__photo').src = card.link;

    //Функциональность лайка
    const likeButtonElement = elementElement.querySelector('.element__like');
    likeButtonElement.addEventListener('click', evt => {
      const like = evt.target;

      like.classList.toggle('element__like_active');
    });

    //Функциональность удаления
    const deleteButtonElement = elementElement.querySelector('.element__delete');
    deleteButtonElement.addEventListener('click', () => {
      let cardIndex = initialCards.indexOf(card);
      initialCards.splice(cardIndex, 1);

      upload();
      }
    );

    elementsElement.append(elementElement);
  };
};
loadAllElements();

//Загрузка карточек из массива
function upload() {
  const elements = elementsElement.querySelectorAll('.element');

  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  };

  loadAllElements()
};

//Добавление карточки фото
function addNewCard() {
  const NewItem = {
    name: nameNewItemPopup.value,
    link: linkNewItemPopup.value
  };
  initialCards.unshift(NewItem);
  upload();
};

//ПОПАП КАРТОЧКИ ФОТО
let popupNewItemElement = document.querySelector('.popup-item');
let newItemFormElement = popupNewItemElement.querySelector('.popup__form')
const closePopupNewItemButtonElement = popupNewItemElement.querySelector('.popup__close-button');

const addButtonElement = profileElement.querySelector('.profile__add-button');

let nameNewItemPopup = newItemFormElement.querySelector('.popup__input_position_top');
let linkNewItemPopup = newItemFormElement.querySelector('.popup__input_position_bottom');

//Открытие попапа добавления карточки
addButtonElement.addEventListener('click', () => {popupNewItemElement.classList.add('popup_opened')
});

//Закрытие попапа добавления карточки
closePopupNewItemButtonElement.addEventListener('click', closeNewItemPopup)
function closeNewItemPopup() {
  popupNewItemElement.classList.remove('popup_opened');
  nameNewItemPopup.value = '';
  linkNewItemPopup.value = '';
};

//Подтверждение добавления карточки
newItemFormElement.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(nameNewItemPopup.value, linkNewItemPopup.value);

  closeNewItemPopup();
});
