let popupElement = document.querySelector('.popup');
let profileElement = document.querySelector('.profile');
let editButtonElement = profileElement.querySelector('.profile__edit-button');
// На будущее
// let addButtonElement = profileElement.querySelector('.profile__add-button')

let profileNameElement = profileElement.querySelector('.profile__name');
let profileJobElement = profileElement.querySelector('.profile__job');

let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let closeButtonElement = popupElement.querySelector('.popup__close-button');

editButtonElement.addEventListener('click', openPopup);
function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
  closeButtonElement.addEventListener('click', closePopup);
};

function closePopup() {
  popupElement.classList.remove('popup_opened');
  nameInput.value = '';
  jobInput.value = '';
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);
