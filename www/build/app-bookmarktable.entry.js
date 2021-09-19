import { r as registerInstance, h, f as getAssetPath } from './index-7e7ca1ac.js';
import { s as store } from './index-35b42073.js';
import { a as displayPopup, r as retrieveBookmarks, e as deleteBookmarkAction, f as deleteBookmark } from './index-c9b514a6.js';

const bookmarkTableCss = ".main{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin:0em 2em 3em 2em;width:calc(66vw - 4em)}.main .link{color:rgba(37, 45, 61, 0.8);word-break:break-all}.main .filter{position:relative;min-width:calc(66vw - 4em)}.main .filter .filterField{width:60%;padding:1em 3em;margin:0.5em 0;display:flex;justify-content:center;border:1px solid #dddddd;border-radius:0.25em;margin-top:0}.main .filter .searchIcon{position:absolute;width:20px;height:20px;top:0.7em;left:0.8em}.main .booksmarksInfo .cardWrapper{display:none}.main .booksmarksInfo .tableWrapper .bookmarkTable,.main .booksmarksInfo .tableWrapper td,.main .booksmarksInfo .tableWrapper th{text-align:left;color:rgba(37, 45, 61, 0.8);width:100%;word-break:break-all}.main .booksmarksInfo .tableWrapper .bookmarkTable .linkIcon,.main .booksmarksInfo .tableWrapper td .linkIcon,.main .booksmarksInfo .tableWrapper th .linkIcon{width:15px;height:15px;margin:0.7em 0 0 0.25em}.main .booksmarksInfo .tableWrapper tbody{display:block;max-height:450px;overflow-y:auto}.main .booksmarksInfo .tableWrapper thead,.main .booksmarksInfo .tableWrapper tr{display:table;width:100%;table-layout:fixed}@media only screen and (max-width: 768px){.main{display:flex;justify-content:center;margin-top:6.5em;margin-bottom:0}.main .filter{min-width:375px}.main .filter .filterField{width:78%;min-height:2em}.main .filter .searchIcon{top:1em}.main .tableWrapper{display:none}.main .cardWrapper{display:block !important;width:100%;min-width:375px;max-height:350px;overflow-y:scroll}.main .cardWrapper .card{padding-left:0;display:flex;justify-content:center;display:flex;flex-direction:column;margin-top:0}.main .cardWrapper .card .infoList{list-style:none;width:300px;height:150px;box-shadow:0 0 0.25em rgba(0, 0, 0, 0.15);color:rgba(37, 45, 61, 0.8);display:flex;justify-content:center;display:flex;flex-direction:column;margin:1em}.main .cardWrapper .card .infoList .infoCard{display:flex;flex-direction:column;text-align:center;width:100%}.main .cardWrapper .card .infoList .infoCard .bookMarkText{padding:0.5em 0}.main .cardWrapper .card .infoList .infoCard .tag{padding-bottom:0.5em}}";

const BookmarkTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linkIcon = 'link.png';
    this.searchIcon = 'search.png';
    this.filterValue = '';
    this.handleFilterChange = (e) => {
      this.filterValue = e.target.value;
      this.filteredList = this.bookmarks.filter((bookmark) => bookmark.tag.toLowerCase().includes(this.filterValue.toLowerCase()));
    };
    this.confirmDeleteBookmark = (bookmark) => {
      displayPopup("warning", "Are you sure you want to delete this bookmark?", "You won't be able to revert this!", true)
        .then((result) => {
        if (result.value) {
          this.deleteBookmarkAction(bookmark);
          this.deleteBookmark(this.currentBookmark);
        }
      });
    };
  }
  componentWillLoad() {
    const { mapDispatchToProps, mapStateToProps } = store;
    mapStateToProps(this, ({ bookmarksReducer }) => {
      const { bookmarks, currentBookmark } = bookmarksReducer;
      this.filteredList = bookmarks.reverse();
      return {
        bookmarks,
        currentBookmark
      };
    });
    mapDispatchToProps(this, {
      retrieveBookmarks,
      deleteBookmarkAction,
      deleteBookmark
    });
    this.retrieveBookmarks();
  }
  render() {
    var _a, _b;
    return (h("div", { class: 'main' }, h("form", { class: 'filter' }, h("img", { class: 'searchIcon', src: getAssetPath(`../assets/icon/${this.searchIcon}`), alt: "Search icon" }), h("input", { type: 'text', class: 'filterField', value: this.filterValue, placeholder: 'Filter by tag', onInput: this.handleFilterChange })), h("div", { class: 'booksmarksInfo' }, h("div", { class: 'tableWrapper' }, h("table", { class: 'bookmarkTable' }, h("thead", null, h("tr", null, h("th", null, "Bookmarks"), h("th", null, "Tags"), h("th", null))), h("tbody", null, (_a = this.filteredList) === null || _a === void 0 ? void 0 : _a.map(bookmark => {
      return (h("tr", null, h("td", null, h("a", { class: 'link', target: '_blank', href: bookmark.link }, bookmark.name), h("img", { class: 'linkIcon', src: getAssetPath(`../assets/icon/${this.linkIcon}`), alt: "link icon" })), h("td", null, bookmark.tag), h("td", null, h("app-button", { isDeleteButton: true, clickHandler: this.confirmDeleteBookmark.bind(this, bookmark) }))));
    })))), h("div", { class: 'cardWrapper' }, h("ul", { class: 'card' }, (_b = this.filteredList) === null || _b === void 0 ? void 0 : _b.map(bookmark => {
      return (h("li", { class: 'infoList' }, h("div", { class: 'infoCard' }, h("div", { class: 'bookMarkText' }, " Bookmark: ", h("a", { target: '_blank', class: 'link', href: bookmark.link }, bookmark.name), " "), h("div", { class: 'tag' }, "Tag: ", bookmark.tag)), h("app-button", { isDeleteButton: true, clickHandler: this.confirmDeleteBookmark.bind(this, bookmark) })));
    }))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
BookmarkTable.style = bookmarkTableCss;

export { BookmarkTable as app_bookmarktable };
