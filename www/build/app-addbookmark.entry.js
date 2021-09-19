import { r as registerInstance, h } from './index-7e7ca1ac.js';
import { s as store } from './index-35b42073.js';
import { d as displayToastMessage, a as displayPopup, b as addBookmarkAction, c as addBookmark, r as retrieveBookmarks } from './index-c9b514a6.js';

const addbookmarkCss = ".addbookmark{width:calc(33vw - 4em);display:flex;flex-direction:column}.addbookmark .addText{font-size:2em;color:rgba(37, 45, 61, 0.8);margin-bottom:0.65em}.addbookmark .form{display:flex;justify-content:center;display:flex;flex-direction:column}.addbookmark .form .inputField{width:94%;padding:1em 1em;margin-bottom:0.5em;display:flex;justify-content:center;border:1px solid #dddddd;border-radius:0.25em}@media only screen and (max-width: 768px){.addbookmark{min-width:375px;margin-left:0;margin-top:1em}.addbookmark .addText{text-align:center}.addbookmark .inputField{width:20em !important}}";

const Addbookmark = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formValue = { name: '', link: '', tag: '' };
    this.handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value.trim();
      this.formValue = Object.assign(Object.assign({}, this.formValue), { [name]: value });
    };
    this.invalidForm = () => {
      const { name, link, tag } = this.formValue;
      const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (name.trim() === '' || link.trim() === '' || tag.trim() === '') {
        displayToastMessage('warning', 'Fill all 3 fields.');
        return false;
      }
      if (!regexp.test(link)) {
        displayToastMessage('warning', 'Enter a valid link');
        return false;
      }
      return false;
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      if (this.invalidForm()) {
        return;
      }
      this.addBookmark(this.formValue);
      this.addBookmarkAction(this.currentBookmark);
      this.formValue = { name: '', link: '', tag: '' };
      displayPopup('success', 'Added!', 'Bookmark has been added successfully', false)
        .then((result) => {
        if (result.value) {
          this.retrieveBookmarks();
        }
      });
    };
  }
  componentWillLoad() {
    const { mapStateToProps, mapDispatchToProps } = store;
    mapStateToProps(this, ({ bookmarksReducer }) => {
      const { currentBookmark } = bookmarksReducer;
      return {
        currentBookmark,
      };
    });
    mapDispatchToProps(this, {
      addBookmarkAction,
      addBookmark,
      retrieveBookmarks
    });
  }
  render() {
    return (h("div", { class: 'addbookmark' }, h("div", { class: 'addText' }, "Add"), h("form", { class: 'form' }, h("input", { type: 'text', class: 'inputField', value: this.formValue.name, name: 'name', placeholder: 'Name', onInput: this.handleChange }), h("input", { type: "url", class: 'inputField', value: this.formValue.link, name: 'link', placeholder: 'Link', onInput: this.handleChange }), h("input", { type: 'text', class: 'inputField', value: this.formValue.tag, name: 'tag', placeholder: 'Tags', onInput: this.handleChange })), h("app-button", { isDeleteButton: false, clickHandler: this.handleSubmit.bind(this) })));
  }
};
Addbookmark.style = addbookmarkCss;

export { Addbookmark as app_addbookmark };
