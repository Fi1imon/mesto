export class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderElements(items) {
    items.forEach((item) => this._renderer(item))
  }

  addItem(element) {
    document.querySelector(this._containerSelector).prepend(element)
  }
}
