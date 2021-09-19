import { Component, h } from '@stencil/core';
import configureStore from '../../store';
import { store } from '@stencil/redux';

@Component({
    tag: 'app-root',
    styleUrl: 'app.scss',
    shadow: true,
})

export class AppRoot {
    componentWillLoad() {
        store.setStore(configureStore({}));
      }
      
    render() {
        return (
            <div>
                <header>
                    <h1>Bookmarks</h1>
                </header>
                <div class="appRoot">
                    <div class='mainWrapper'>
                        <app-bookmarktable />
                        <app-addbookmark />
                    </div>
                </div>
            </div>
        );
    }
}
