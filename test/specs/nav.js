import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Navigation', async () => {
    it('Get primary menu items text and assert them', async () => {

        allureReporter.addFeature ("Navigation");
        allureReporter.addSeverity("critical");
        
        // browser.pause(500); - hard coded pause

        await HomePage.open();

        const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
        
        const actualLinks = [];
        
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        
        // await $('#primary-menu').waitForDisplayed({ timeout: 1000 });

        //await $('#primary-menu li').waitForClickable();


        //wait until "Home" text i s displayed

        await browser.waitUntil(async function() {
            // const hometext = await $('#primary-menu li').getText();
            const homeText = await HomePage.NavComponent.homeMenuLink.getText();

            return homeText === 'Home';
        },{
            timeout: 5000,
            timeoutMsg: 'Could not verify "Home" text present in "#primary-menu li" element'
        });

        // const navLinks = await $$('#primary-menu li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMwenu;
        
        for (const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(actualLinks).toEqual(expectedLinks);

    });
});