import { displayToastMessage } from './../../components/view/notification/notification';
import { IBookMark } from './../state-types';
import { addBookmarkErrorAction, addBookmarkOkAction, deleteBookmarkErrorAction, deleteBookmarkOkAction, downloadBookmarksAction, downloadBookmarksErrorAction, downloadBookmarksOkAction } from '../actions/bookmarks-action';
import { addBookmarkDB, deleteBookmarksDB, retrieveBookmarksDB } from "../api-calls";
import { displayPopup } from '../../components/view/notification/notification';

export function retrieveBookmarks() {
    return async dispatch => {
        await dispatch(downloadBookmarksAction());
        try {
            const { data } = await retrieveBookmarksDB();
            await dispatch(downloadBookmarksOkAction(data))
        } catch (error) {
            dispatch(downloadBookmarksErrorAction());
            await displayToastMessage('error', 'An error ocurred')
        }
    };
}

export function addBookmark(bookmark: IBookMark) {
    return async dispatch => {
        try {
            await addBookmarkDB(bookmark);
            await dispatch(addBookmarkOkAction());
        } catch (error) {
            await dispatch(addBookmarkErrorAction(true));
            displayPopup('error', 'Error', 'An error ocurred. Please, try it again.', false);
        }
    }
}

export function deleteBookmark(bookmark: IBookMark) {
    return async dispatch => {
        try {
            await deleteBookmarksDB(bookmark);
            await dispatch(deleteBookmarkOkAction());
            displayPopup('success', 'Deleted!', 'The bookmark has been deleted.', false)
        } catch (error) {
            await dispatch(deleteBookmarkErrorAction());
        }
    }
}
