import { r as registerInstance, h } from './index-7e7ca1ac.js';

const buttonCss = ".btnWrapper{display:flex;justify-content:flex-start}.btnWrapper .deleteBtn,.btnWrapper .addBtn{color:white;border:none;background:#dddddd;padding:1em 2em;cursor:pointer;border-radius:4px;margin:0 auto}.btnWrapper .addBtn{background:#007487;margin:1em 0}@media only screen and (max-width: 768px){.btnWrapper{justify-content:center}}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const text = this.isDeleteButton ? 'Delete' : 'Add';
    return (h("div", { class: 'btnWrapper' }, h("button", { class: this.isDeleteButton ? 'deleteBtn' : 'addBtn', onClick: this.clickHandler }, text)));
  }
};
Button.style = buttonCss;

export { Button as app_button };
