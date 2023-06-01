(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){var r=n.card,o=n.handleCardClick,i=n.handleDeleteClick,u=n.deleteCard,a=n.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleCardClick=o,this._cardSelector=r.cardSelector,this._name=r.name,this._link=r.link,this._likes=r.likes,this._ownerId=r.ownerId,this._cardId=r.cardId,this._handleLikeClick=a,this._handleDeleteClick=i,this._deleteCard=u,this._userId=t}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0);return this._ownerId===this._userId||e.querySelector(".element__delete").remove(),e}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._likesNumberElement=this._card.querySelector(".element__likes-number"),this._setEventListeners(),this.hasUser()&&this._toggleLike(),this._card.querySelector(".element__name").textContent=this._name,this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._likesNumberElement.textContent="".concat(this._likes.length),this._card}},{key:"_addDeleteButtonListener",value:function(){var e=this;this._card.querySelector(".element__delete")&&this._card.querySelector(".element__delete").addEventListener("click",(function(){e._handleDeleteClick({card:e,cardId:e._cardId})}))}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement=this._card.querySelector(".element__like-button"),this._cardPhoto=this._card.querySelector(".element__photo"),this._addDeleteButtonListener(),this._cardPhoto.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeElement.addEventListener("click",(function(){e._handleLikeClick(e,e._cardId)}))}},{key:"refreshLikesNumber",value:function(e){this._likes=e,this._likesNumberElement.textContent=e.length,this._toggleLike()}},{key:"hasUser",value:function(){var e=this;return!!this._likes.some((function(t){return t._id===e._userId}))}},{key:"_toggleLike",value:function(){this._likeElement.classList.toggle("element__like-button_active")}},{key:"deleteCardElement",value:function(){this._card.remove(),this._card=null,this._likeElement=null,this._cardPhoto=null}},{key:"deleteCardResponse",value:function(e){return this._deleteCard(e,this)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t){var n=t.validationClasses,r=t.formElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationClasses=n,this._formElement=r}var t,n;return t=e,(n=[{key:"_showErrorMessage",value:function(e,t){this._formElement.querySelector(".".concat(e.id,"-error")).textContent=t,e.classList.add(this._validationClasses.inputErrorClass)}},{key:"_hideErrorMessage",value:function(e){this._formElement.querySelector(".".concat(e.id,"-error")).textContent="",e.classList.remove(this._validationClasses.inputErrorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._validationClasses.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._validationClasses.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationClasses.submitButtonSelector),this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButton(t)}))})),this._formElement.addEventListener}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this.disableButton(),this._inputList.forEach((function(t){e._hideErrorMessage(t)}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._validationClasses.inactiveButtonClass),this._buttonElement.setAttribute("disabled","true")}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){t.items;var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderElements",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("mousedown",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=t._popup.querySelector(".popup-image__photo"),t._photoCaption=t._popup.querySelector(".popup-image__name"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;d(b(u.prototype),"open",this).call(this),this._popupPhoto.src=n,this._popupPhoto.alt=t,this._photoCaption.textContent=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submit=r,t._form=t._popup.querySelector(".popup__form"),t._formInputs=t._form.querySelectorAll(".popup__input"),t._submitButton=t._popup.querySelector(".popup__submit-button"),t._loadingButton=t._popup.querySelector(".popup__loading-button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"toggleLoadingSubmitButton",value:function(e){e?(this._submitButton.classList.add("popup__submit-button_hidden"),this._loadingButton.classList.add("popup__loading-button_visible")):(this._submitButton.classList.remove("popup__submit-button_hidden"),this._loadingButton.classList.remove("popup__loading-button_visible"))}},{key:"setEventListeners",value:function(){var e=this;S(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.toggleLoadingSubmitButton(!0),e._submit(e._getInputValues())}))}},{key:"close",value:function(){S(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job,r=e.avatar;this._userName.textContent=t,this._userJob.textContent=n,this._userAvatar.src=r}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function L(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===P(t)?t:String(t)}var q=function(){function e(t){var n,r,o,i=t.baseUrl,u=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},(r=L(r="_isOk"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._baseUrl=i,this._hraders=u}var t,n;return t=e,(n=[{key:"_request",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(e),t).then(this._isOk)}},{key:"getUserInfo",value:function(){return this._request("users/me",{headers:this._hraders})}},{key:"getInitialCards",value:function(){return this._request("cards",{headers:this._hraders})}},{key:"setUserInfo",value:function(e){return this._request("users/me",{method:"PATCH",headers:this._hraders,body:JSON.stringify({name:e.name,about:e.job})})}},{key:"addCard",value:function(e){return this._request("cards",{method:"POST",headers:this._hraders,body:JSON.stringify({name:e.title,link:e.url})})}},{key:"deleteCard",value:function(e){return this._request("cards/".concat(e),{method:"DELETE",headers:this._hraders})}},{key:"setLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"PUT",headers:this._hraders})}},{key:"removeLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"DELETE",headers:this._hraders})}},{key:"uploadAvatar",value:function(e){return this._request("users/me/avatar",{method:"PATCH",headers:this._hraders,body:JSON.stringify({avatar:e})})}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitButton=t._popup.querySelector(".popup-delete__button"),t}return t=u,(n=[{key:"open",value:function(e,t){var n=this;B(A(u.prototype),"open",this).call(this),this._deleteFnc=function(){e.deleteCardResponse(t),n.close()},this._submitButton.addEventListener("click",this._deleteFnc)}},{key:"close",value:function(){B(A(u.prototype),"close",this).call(this),this._submitButton.removeEventListener("click",this._deleteFnc)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D,N=document.querySelector(".popup-profile"),V=document.querySelector(".profile__edit-button"),M=N.querySelector(".popup__input_position_top"),J=N.querySelector(".popup__input_position_bottom"),F=document.querySelector(".profile__add-button"),H=document.querySelector(".profile__avatar-overlay"),z={},$=new q({baseUrl:"https://nomoreparties.co/v1/cohort-66",headers:{authorization:"1b376021-e410-4f6f-96c7-0ea2e231f4c4","Content-Type":"application/json"}}),G=new O({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),K=new l({renderer:function(e){K.addItem(Z(e))}},".elements");function Q(e,t){t.toggleLoadingSubmitButton(!0),e().then((function(){return t.close()})).catch((function(e){console.log("'catch' поймал ошибку: ".concat(e))})).finally((function(){return W.toggleLoadingSubmitButton(!1)}))}Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G.setUserInfo({name:o.name,job:o.about,avatar:o.avatar}),D=o._id,K.renderElements(i.toReversed())})).catch((function(e){console.log("'catch' поймал ошибку: ".concat(e))}));var W=new w({popupSelector:".popup-profile",submit:function(e){Q((function(){return $.setUserInfo(e).then((function(e){G.setUserInfo({name:e.name,job:e.about,avatar:e.avatar})}))}),W)}});W.setEventListeners(),V.addEventListener("click",(function(){var e;e=G.getUserInfo(),M.value=e.name,J.value=e.job,z.profileEdit.resetValidation(),W.open()}));var X=new v(".popup-image");X.setEventListeners();var Y=new U({popupSelector:".popup-delete"});function Z(e){var t=new n(D,{card:{name:e.name,link:e.link,likes:e.likes,ownerId:e.owner._id,cardId:e._id,cardSelector:"#element"},handleCardClick:function(e,t){X.open({name:e,link:t})},handleDeleteClick:function(e){var t=e.card,n=e.cardId;Y.open(t,n)},deleteCard:function(e){$.deleteCard(e,t).then((function(){t.deleteCardElement()})).catch((function(e){console.log("'catch' поймал ошибку: ".concat(e))}))},handleLikeClick:function(e,t){e.hasUser()?$.removeLike(t).then((function(t){e.refreshLikesNumber(t.likes)})).catch((function(e){console.log("'catch' поймал ошибку: ".concat(e))})):$.setLike(t).then((function(t){e.refreshLikesNumber(t.likes)})).catch((function(e){console.log("'catch' поймал ошибку: ".concat(e))}))}});return t.createCard()}Y.setEventListeners();var ee=new w({popupSelector:".popup-item",submit:function(e){Q((function(){return $.addCard(e).then((function(e){K.addItem(Z(e))}))}),ee)}});ee.setEventListeners(),F.addEventListener("click",(function(){z.addPhoto.resetValidation(),ee.open()})),H.addEventListener("click",(function(){z.newAvatar.resetValidation(),ne.open()}));var te,ne=new w({popupSelector:".popup-avatar",submit:function(e){Q((function(){return $.uploadAvatar(e.url).then((function(e){G.setUserInfo({name:e.name,job:e.about,avatar:e.avatar})}))}),ne)}});ne.setEventListeners(),te={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:".popup__input_type_error",errorClass:".popup__input-error",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled"},Array.from(document.querySelectorAll(te.formSelector)).forEach((function(e){var t=new i({validationClasses:te,formElement:e}),n=e.getAttribute("name");z[n]=t,t.enableValidation()}))})();