import { Component, h, State } from '@stencil/core';
import { store } from '@stencil/redux';
import { addBookmarkAction } from '../../store/actions/bookmarks-action';
import { IBookMark, IBookMarkState } from '../../store/state-types';
import { addBookmark, retrieveBookmarks } from '../../store/thunk';
import { displayPopup, displayToastMessage } from '../view/notification/notification';

interface IFormValue {
    name: string; link: string; tag: string;
}

@Component({
    tag: 'app-addbookmark',
    styleUrl: 'addbookmark.scss',
    shadow: true,
})

export class Addbookmark {
    @State() formValue: IFormValue = { name: '', link: '', tag: '' };
    @State() addBookmarkAction: (bookmark: IBookMark) => void;
    @State() addBookmark: (bookmark: IBookMark) => void;
    @State() currentBookmark: IBookMark;
    retrieveBookmarks: () => void;

    componentWillLoad() {
        const { mapStateToProps, mapDispatchToProps } = store;
        mapStateToProps(this, ({ bookmarksReducer }: { bookmarksReducer: IBookMarkState }) => {
            const { currentBookmark } = bookmarksReducer;
            return {
                currentBookmark,
            }
        })
        mapDispatchToProps(this, {
            addBookmarkAction,
            addBookmark,
            retrieveBookmarks
        })
    }

    handleChange = (e: Event): void => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value.trim();
        this.formValue = { ...this.formValue, [name]: value };
    }

    invalidForm = (): boolean => {
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
    }

    handleSubmit = (e: Event): void => {
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
    }

    render() {
        return (
            <div class='addbookmark'>
                <div class='addText'>Add</div>
                <form class='form'>
                    <input type='text' class='inputField' value={this.formValue.name} name='name' placeholder='Name' onInput={this.handleChange} />
                    <input type="url" class='inputField' value={this.formValue.link} name='link' placeholder='Link' onInput={this.handleChange} />
                    <input type='text' class='inputField' value={this.formValue.tag} name='tag' placeholder='Tags' onInput={this.handleChange} />
                </form>
                <app-button isDeleteButton={false} clickHandler={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}
