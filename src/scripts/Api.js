export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._hraders = headers;
    this.isOk = (res) => {
      if(res.ok) {
        return res.json();
      }

      return  Promise.reject(`Ошибка: ${res.status}`)
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._hraders
    })
      .then(this.isOk)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._hraders
    })
      .then(this.isOk)
  }

  setUserInfo(values) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._hraders,
      body: JSON.stringify({
        name: values.name,
        about: values.job
      })
    })
      .then(this.isOk)
  }

  addCard(values) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._hraders,
      body: JSON.stringify({
        name: values['title'],
        link: values['url']
      })
    })
      .then(this.isOk)
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._hraders
    })
      .then(this.isOk)
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      })
  }

  setLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._hraders
    })
      .then(this.isOk)
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      })
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._hraders
    })
      .then(this.isOk)
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      })
  }

  uploadAvatar(imageUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._hraders,
      body: JSON.stringify({
        avatar: imageUrl
      })
    })
      .then(this.isOk)
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      })
  }

}
