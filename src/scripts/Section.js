export class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderElements(items) {
    items.forEach(this._renderer)
  }

  addItem(element) {
    this._container.append(element)
  }

  removeElements() {
    this._elements = this._container.querySelectorAll('.element')
    this._elements.forEach((element) => {
      element.remove();
    })
  }
}
