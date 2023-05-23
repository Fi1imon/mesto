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

}
