import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'app-button',
    styleUrl: 'button.scss',
    shadow: true,
})

export class Button {
    @Prop() isDeleteButton: boolean;
    @Prop() clickHandler: () => void;
    @State() text: string;

    render() {
        const text = this.isDeleteButton ? 'Delete' : 'Add';
        return (
            <div class='btnWrapper'>
                <button class={this.isDeleteButton ? 'deleteBtn' : 'addBtn'} onClick={this.clickHandler}>{text}</button>
            </div>
        );
    }
}
