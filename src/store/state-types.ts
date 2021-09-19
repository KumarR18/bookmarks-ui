import { BookMarkActionTypes } from './action-types/index';

export type ACTIONTYPE = {
    type: BookMarkActionTypes;
    payload?: IBookMark | IBookMark[] | boolean;
    bookmark?: IBookMark;
};

export interface IBookMarkState {
    readonly loading: boolean;
    readonly bookmarks?: IBookMark[];
    readonly error?: boolean;
    readonly currentBookmark?: IBookMark;
}

export interface IBookMark {
    name: string;
    link: string;
    tag: string;
    id?: number;
}
