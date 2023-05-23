export class UserInfo {
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
  }

  setUserInfo({name, job, avatar}) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._userAvatar.src = avatar
  }
}
