import { BookMarkActionTypes } from "../action-types";
import { bookmarksReducer, initialState } from "./bookmark-reducer";


describe('bookmarksReducer', () => {
    it('should handle BEGIN_BOOKMARKS_DOWNLOAD', () => {
        expect(
            bookmarksReducer(initialState, {
                type: BookMarkActionTypes.BEGIN_BOOKMARKS_DOWNLOAD,
                payload: false,
            })
        ).toEqual({
            bookmarks: [],
            error: undefined,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle ADD_BOOKMARK', () => {
        expect(
            bookmarksReducer(initialState, {
                type: BookMarkActionTypes.ADD_BOOKMARK,
                payload: false,
            })
        ).toEqual({
            bookmarks: [],
            error: undefined,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle ADD_BOOKMARK_ERROR', () => {
        expect(
            bookmarksReducer(initialState, {
                type: BookMarkActionTypes.ADD_BOOKMARK_ERROR,
                payload: true,
            })
        ).toEqual({
            bookmarks: [],
            error: true,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle BOOKMARKS_DOWNLOAD_ERROR', () => {
        expect(
            bookmarksReducer(initialState, {
                type: BookMarkActionTypes.BOOKMARKS_DOWNLOAD_ERROR,
                payload: true,
            })
        ).toEqual({
            bookmarks: [],
            error: true,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle BOOKMARK_DELETED_ERROR', () => {
        expect(
            bookmarksReducer(initialState, {
                type: BookMarkActionTypes.BOOKMARK_DELETED_ERROR,
                payload: true,
            })
        ).toEqual({
            bookmarks: [],
            error: true,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle BOOKMARKS_DOWNLOAD_OK', () => {
        expect(
            bookmarksReducer({ ...initialState, loading: false, error: undefined }, {
                type: BookMarkActionTypes.BOOKMARKS_DOWNLOAD_OK,
                payload: [{
                    "name": "Google",
                    "link": "https://www.google.com/",
                    "tag": "Munich",
                    "id": 6
                }],
            })
        ).toEqual({
            bookmarks: [{
                "name": "Google",
                "link": "https://www.google.com/",
                "tag": "Munich",
                "id": 6
            }],
            error: undefined,
            loading: false,
            currentBookmark: undefined,
        });
    });

    it('should handle RETRIEVE_BOOKMARK_DELETE', () => {
        expect(
            bookmarksReducer({ ...initialState, loading: false, error: undefined }, {
                type: BookMarkActionTypes.RETRIEVE_BOOKMARK_DELETE,
                payload: [{
                    "name": "Google",
                    "link": "https://www.google.com/",
                    "tag": "Munich",
                    "id": 6
                }],
            })
        ).toEqual({
            bookmarks: [],
            error: undefined,
            loading: false,
            currentBookmark: [{
                "name": "Google",
                "link": "https://www.google.com/",
                "tag": "Munich",
                "id": 6
            }],
        });
    });

    it('should handle BOOKMARK_DELETED_OK', () => {
        expect(
            bookmarksReducer({ ...initialState, loading: false, error: undefined }, {
                type: BookMarkActionTypes.BOOKMARK_DELETED_OK,
                payload: [{
                    "name": "Google",
                    "link": "https://www.google.com/",
                    "tag": "Munich",
                    "id": 6
                }],
            })
        ).toEqual({
            bookmarks: [],
            error: undefined,
            loading: false,
            currentBookmark: undefined,
        });
    });
});