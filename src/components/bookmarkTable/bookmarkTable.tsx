import { Component, getAssetPath, h, State } from '@stencil/core';
import { store } from '@stencil/redux';
import { deleteBookmarkAction } from '../../store/actions/bookmarks-action';
import { IBookMark, IBookMarkState } from '../../store/state-types';
import { deleteBookmark, retrieveBookmarks } from '../../store/thunk';
import { displayPopup } from '../view/notification/notification';

@Component({
    tag: 'app-bookmarktable',
    styleUrl: 'bookmarkTable.scss',
    assetsDirs: ['assets'],
    shadow: true,
})


export class BookmarkTable {
    linkIcon: string = 'link.png';
    searchIcon: string = 'search.png';
    @State() bookmarks: IBookMark[];
    @State() filteredList: IBookMark[];
    @State() currentBookmark: IBookMark;
    @State() filterValue: string = '';
    retrieveBookmarks: () => void;
    deleteBookmarkAction: (bookmark: IBookMark) => void;
    deleteBookmark: (bookmark: IBookMark) => void;

    componentWillLoad() {
        const { mapDispatchToProps, mapStateToProps } = store;
        mapStateToProps(this, ({ bookmarksReducer }: { bookmarksReducer: IBookMarkState }) => {
            const { bookmarks, currentBookmark } = bookmarksReducer;
            this.filteredList = bookmarks.reverse()
            return {
                bookmarks,
                currentBookmark
            }
        })

        mapDispatchToProps(this, {
            retrieveBookmarks,
            deleteBookmarkAction,
            deleteBookmark
        })
        this.retrieveBookmarks();
    }

    handleFilterChange = (e: Event) => {
        this.filterValue = (e.target as HTMLInputElement).value;
        this.filteredList = this.bookmarks.filter((bookmark: IBookMark) => bookmark.tag.toLowerCase().includes(this.filterValue.toLowerCase()));
    }

    confirmDeleteBookmark = (bookmark: IBookMark): void => {
        displayPopup("warning", "Are you sure you want to delete this bookmark?", "You won't be able to revert this!", true)
            .then((result) => {
                if (result.value) {
                    this.deleteBookmarkAction(bookmark);
                    this.deleteBookmark(this.currentBookmark)
                }
            });
    };

    render() {
        return (
            <div class='main'>
                <form class='filter'>
                    <img class='searchIcon' src={getAssetPath(`../assets/icon/${this.searchIcon}`)} alt="Search icon" />
                    <input type='text' class='filterField' value={this.filterValue} placeholder='Filter by tag' onInput={this.handleFilterChange} />
                </form>
                <div class='booksmarksInfo'>
                    <div class='tableWrapper'>
                        <table class='bookmarkTable'>
                            <thead>
                                <tr>
                                    <th>Bookmarks</th>
                                    <th>Tags</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.filteredList?.map(bookmark => {
                                    return (
                                        <tr>
                                            <td>
                                                <a class='link' target='_blank' href={bookmark.link}>{bookmark.name}</a>
                                                <img class='linkIcon' src={getAssetPath(`../assets/icon/${this.linkIcon}`)} alt="link icon" />
                                            </td>
                                            <td>{bookmark.tag}</td>
                                            <td>
                                                <app-button isDeleteButton={true} clickHandler={this.confirmDeleteBookmark.bind(this, bookmark)} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class='cardWrapper'>
                        <ul class='card'>
                            {this.filteredList?.map(bookmark => {
                                return (
                                    <li class='infoList'>
                                        <div class='infoCard'>
                                            <div class='bookMarkText'> Bookmark: <a target='_blank' class='link' href={bookmark.link}>{bookmark.name}</a> </div>
                                            <div class='tag'>Tag: {bookmark.tag}</div>
                                        </div>
                                        <app-button isDeleteButton={true} clickHandler={this.confirmDeleteBookmark.bind(this, bookmark)} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
