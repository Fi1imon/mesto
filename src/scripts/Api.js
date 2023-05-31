export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._hraders = headers;
  }

  _isOk = (res) => {
    if(res.ok) {
      return res.json();
    }

    return  Promise.reject(`Ошибка: ${res.status}`)
  }

  _catchErr = (err) => {
    console.log(`Запрос не дошел до сервера. Вот почему: ${err}`)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._hraders
    })
      .then(this._isOk)
      .catch(this._catchErr)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._hraders
    })
      .then(this._isOk)
      .catch(this._catchErr)
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
      .then(this._isOk)
      .catch(this._catchErr)
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
      .then(this._isOk)
      .catch(this._catchErr)
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._hraders
    })
      .then(this._isOk)
      .catch(this._catchErr)
  }

  setLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._hraders
    })
      .then(this._isOk)
      .catch(this._catchErr)
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._hraders
    })
      .then(this._isOk)
      .catch(this._catchErr)
  }

  uploadAvatar(imageUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._hraders,
      body: JSON.stringify({
        avatar: imageUrl
      })
    })
      .then(this._isOk)
      .catch(this._catchErr)
  }

}
