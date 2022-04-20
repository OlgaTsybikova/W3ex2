/* eslint-disable no-unused-vars */
import InputComponent from "./Componentes/InputComponent.js";
import ParrafoComponent from "./Componentes/ParrafoComponent.js";

const container = document.querySelector(".container"); // the God Father
const input = new InputComponent(container, "textInput", "text"); // father component, class that i give, and type of input
const textParrafo = new ParrafoComponent(container, "textParrafo", "text");
