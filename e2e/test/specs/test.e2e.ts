import {browser, expect} from '@wdio/globals'

describe('Guestbook application', () => {
    const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000';

    it('should have Guestbook as title', async () => {
        await browser.url(baseUrl);

        var browserTitle = '';
        await browser.getTitle().then((title) => {
            browserTitle = title;
            console.log(browserTitle);
        });

        await expect(browserTitle === 'Guestbook').toBe(true);
    });

    it('should have an about us page with header and paragraph', async () => {
        await browser.url(baseUrl + '/about')

        let browserTitle = '';
        await browser.getTitle().then((title) => {
            browserTitle = title;
        });

        const aboutUsHeader = await $('#about-us');
        const aboutUsParagraph = await $('#about-us-paragraph');
        const headerText = await aboutUsHeader.getText();
        const paragraphText = await aboutUsParagraph.getText();

        await expect(browserTitle === 'About us').toBe(true);
        expect(headerText).toBe('About us');
        expect(paragraphText).toBe('This is a guestbook.');
    });

    it('should redirect non-authenticated user to GitHub SSO ', async () => {
        await browser.url(baseUrl + '/users');

        const browserUrl = await browser.getUrl();
        await expect(browserUrl).toContain('/api/auth/signin');
        const formElement = await $('form[action*="/api/auth/signin/github"]');
        await expect(formElement).toBeExisting();
    });

    it('should show a 404 when going to contact page', async () => {
        await browser.url(baseUrl + '/contact');

        const browserTitle = await browser.getTitle();
        await expect(browserTitle).toBe('404: This page could not be found');

        const errorHeader = await $('h1.next-error-h1');
        await expect(errorHeader).toBeExisting();
        const errorText = await $('h2');
        await expect(errorText).toHaveTextContaining('This page could not be found');
    });
})

