import imgBrightStreet from '../images/street.png';
import imgMountain from '../images/mountain.png';
import imgWhiteBear from '../images/white_bear.png'
import imgKiss from '../images/kiss.png'
import imgCar from '../images/porsche.png'
import imgFlowers from '../images/branch.png'

export const initialCards = [
  {
    name: 'Яркая улица',
    link: imgBrightStreet
  },
  {
    name: 'Горы',
    link: imgMountain
  },
  {
    name: 'Белый мишка',
    link: imgWhiteBear
  },
  {
    name: 'Поцелуй',
    link: imgKiss
  },
  {
    name: 'Машина',
    link: imgCar
  },
  {
    name: 'Цветочки на ветке',
    link: imgFlowers
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input-error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled'
};
