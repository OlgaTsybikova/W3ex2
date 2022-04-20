import Component from "./Component.js";

class ParrafoComponent extends Component {
  text;

  constructor(parentElement, className, text) {
    super(parentElement, "p", className);
    this.element.textContent = text;
  }
}
export default ParrafoComponent;
