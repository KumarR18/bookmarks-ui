import { Reducer } from "redux";
import { BookMarkActionTypes } from "../action-types";
import { ACTIONTYPE, IBookMark, IBookMarkState } from "../state-types";

export const initialState: IBookMarkState = {
    bookmarks: [],
    error: undefined,
    loading: false,
    currentBookmark: undefined,
};

const reducer: Reducer<IBookMarkState> = (
    state: IBookMarkState = initialState,
    action: ACTIONTYPE
): IBookMarkState => {
    const { type, payload, bookmark } = action;
    const { bookmarks, currentBookmark } = state;

    switch (type) {
        case BookMarkActionTypes.BEGIN_BOOKMARKS_DOWNLOAD:
        case BookMarkActionTypes.ADD_BOOKMARK:
            return {
                ...state,
                loading: payload as boolean,
                currentBookmark: bookmark,
            };

        case BookMarkActionTypes.ADD_BOOKMARK_ERROR:
        case BookMarkActionTypes.BOOKMARKS_DOWNLOAD_ERROR:
        case BookMarkActionTypes.BOOKMARK_DELETED_ERROR:
            return {
                ...state,
                loading: false,
                error: payload as boolean,
            };

        case BookMarkActionTypes.BOOKMARKS_DOWNLOAD_OK:
            return {
                ...state,
                loading: false,
                error: undefined,
                bookmarks: payload as IBookMark[],
            };

        case BookMarkActionTypes.RETRIEVE_BOOKMARK_DELETE:
            return {
                ...state,
                currentBookmark: payload as IBookMark,
            };

        case BookMarkActionTypes.BOOKMARK_DELETED_OK:
            return {
                ...state,
                bookmarks: bookmarks?.filter(
                    (bookmark: IBookMark) => bookmark.id !== (currentBookmark as IBookMark).id
                ),
                currentBookmark: undefined,
            };

        default:
            return state;
    }
};

export { reducer as bookmarksReducer };
