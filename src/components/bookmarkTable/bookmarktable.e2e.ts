import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('app-bookmarktable', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <app-bookmarktable></app-bookmarktable>
      `
      });
      element = await page.find('app-bookmarktable >>> div');
    });

    it('should MatchSnapshot', async () => {
        const elements = await element.find('.main');
        expect(elements).toMatchSnapshot()
    });
});