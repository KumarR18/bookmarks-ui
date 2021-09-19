import axiosClient from '../config/index';
import { IBookMark } from '../state-types';

export async function retrieveBookmarksDB() {
  return await axiosClient.get('/bookmarks');
}

export async function addBookmarkDB(bookmarks: IBookMark) {
  return await axiosClient.post('/bookmarks', bookmarks);
}

export async function deleteBookmarksDB(bookmark: IBookMark) {
  return await axiosClient.delete(`/bookmarks/${bookmark.id}`);
}
