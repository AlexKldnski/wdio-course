import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {

    // before(async () => {
    //     console.log('THIS COULD BE USED FOR TEST SETUP');
    //     //Open URL
    //     // await HomePage.open();
    // })

    beforeEach(async () => {
        console.log('THIS RUNS BEFORE EACH TEST');
        //Open URL
        await HomePage.open();
    });

    // after(async () => {
    //     console.log('THIS COULD BE USED FOR TEST CLEANUP');
        
    // })

    // afterEach(async () => {
    //     console.log('THIS RUNS AFTER EACH TEST');
       
    // });

    it('Open URL & assert title', async () => {

        allureReporter.addSeverity("minor");

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });
    
    // applying "x" before "it" allows to skip a test
    
    it('Open "About" Page & assert page url', async () => {
        var givenUrl="https://practice.automationbro.com/about/";
        await browser.url(givenUrl);
        await expect(browser).toHaveUrl(givenUrl);
    
    })

    it('Click "Get Started" button & assert url contains "get-started" text', async () => {

        await HomePage.btnGetStarted.click();

        await expect(browser).toHaveUrlContaining('get-started');
    
    })

    it('Click logo & assert url does NOT contains "get-started" text', async () => {

        allureReporter.addFeature("Logo Verification");

        await HomePage.logoImage.click();

        await expect(browser).not.toHaveUrlContaining('get-started');
    
    })

    it('Find heading element and assert text on the home page', async () => {

        allureReporter.addSeverity("trivial");

        const element = await HomePage.headingText;

        await expect(element).toHaveText('Think different. Make different.');
    
    })

});