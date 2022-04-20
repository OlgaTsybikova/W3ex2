import Component from "./Component.js";

class InputComponent extends Component {
  type;
  constructor(parentElement, className, type) {
    super(parentElement, "input", className); // parent element and className are asked to constructor, tag is assigned by you
    this.element.type = type; // We ask what type of input this is to a constructor
  }
}
export default InputComponent;
