import { BookMarkActionTypes } from "../action-types";
import { IBookMark } from "../state-types";

const downloadBookmarks = () => ({
    type: BookMarkActionTypes.BEGIN_BOOKMARKS_DOWNLOAD,
    payload: true,
});

const downloadBookmarksOk = (bookmarks: IBookMark[]) => ({
    type: BookMarkActionTypes.BOOKMARKS_DOWNLOAD_OK,
    payload: bookmarks,
});

const downloadBookmarksError = () => ({
    type: BookMarkActionTypes.BOOKMARKS_DOWNLOAD_ERROR,
    payload: true,
});

export const downloadBookmarksAction = () => async dispatch => dispatch(downloadBookmarks());

export const downloadBookmarksOkAction = (bookmarks: IBookMark[]) => async dispatch => dispatch(downloadBookmarksOk(bookmarks));

export const downloadBookmarksErrorAction = () => async dispatch => dispatch(downloadBookmarksError());

const addBookmark = (bookmark: IBookMark) => ({
    type: BookMarkActionTypes.ADD_BOOKMARK,
    payload: true,
    bookmark: bookmark
});

const addBookmarkOk = () => ({
    type: BookMarkActionTypes.BEGIN_BOOKMARKS_DOWNLOAD,
    payload: true,
});

const addBookmarkError = (state: boolean) => ({
    type: BookMarkActionTypes.ADD_BOOKMARK_ERROR,
    payload: state,
});

export const addBookmarkAction = (bookmark: IBookMark) => async dispatch => dispatch(addBookmark(bookmark));

export const addBookmarkOkAction = () => async dispatch => dispatch(addBookmarkOk());

export const addBookmarkErrorAction = (state: true) => async dispatch => dispatch(addBookmarkError(state));

const retrieveBookmarkDelete = (bookmark: IBookMark) => ({
    type: BookMarkActionTypes.RETRIEVE_BOOKMARK_DELETE,
    payload: bookmark,
});

const deleteBookmarkOk = () => ({
    type: BookMarkActionTypes.BOOKMARK_DELETED_OK,
});

const deleteBookmarkError = () => ({
    type: BookMarkActionTypes.BOOKMARK_DELETED_ERROR,
    payload: true,
});

export const deleteBookmarkAction = (bookmark: IBookMark) => async dispatch => dispatch(retrieveBookmarkDelete(bookmark));

export const deleteBookmarkOkAction = () => async dispatch => dispatch(deleteBookmarkOk());

export const deleteBookmarkErrorAction = () => async dispatch => dispatch(deleteBookmarkError());
