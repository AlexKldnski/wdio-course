describe('IFrame', () => {
    it('Working with iframe', async () => {
        // open.url
        await browser.url('https://practice.automationbro.com/iframe-sample/')
        //access iframe
        const iFrame = await $('#advanced-iframe')
        await browser.switchToFrame(iFrame)
        // verifu my logo exists
        await expect($('#site-logo')).toBeExisting()

        //swith back to the page (parent frame)
        
        await browser.switchToParentFrame()

        // verify page title
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample')
    })
})