export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('mousedown', () => {
      this.close()
    })

    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close()
      }
    })
  }
}
