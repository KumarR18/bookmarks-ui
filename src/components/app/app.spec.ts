
import { newSpecPage } from '@stencil/core/testing';
import { AppRoot } from './app';

describe('AppRoot', () => {
    it('should render AppRoot component', async () => {

        const page = await newSpecPage({
            components: [AppRoot],
            html: `<appRoot></appRoot>`,
        });

        expect(page.root).toEqualHtml(`
      <appRoot></appRoot>
    `);

        expect(page).toBeTruthy();

        expect(page.root).toMatchSnapshot()
    });

});