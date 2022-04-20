class Component {
  element;

  constructor(parentElement, tag, className) {
    //
    this.element = document.createElement(tag); // creating element that has the HTMLtag
    this.element.className = className; // You assign a className to the element
    parentElement.appendChild(this.element); // Add child to the father
  }
}
export default Component;
