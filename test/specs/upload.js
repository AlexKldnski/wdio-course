const path = require('path');
import allureReporter from '@wdio/allure-reporter';

describe('Upload Tests', () => {
    it('Simple upload test', async () => {

        allureReporter.addFeature("Uploading Picture");
        allureReporter.addSeverity("critical");
        
        await browser.url('https://the-internet.herokuapp.com/upload');

        //console.log(__dirname);

        const filePath = path.join(__dirname, '../data/DilligenceIsTheMotherOfGoodLuck.png');

        const remoteFilePath = await browser.uploadFile(filePath);
        
        await $('#file-upload').setValue(remoteFilePath);

        await $('#file-submit').click();

        //assertion

        await expect($('h3')).toHaveText('File Uploaded!');    

    });

    it('Upload test, choose file button is hidden', async () => {
        
        await browser.url('/cart/');

        //console.log(__dirname);

        const filePath = path.join(__dirname, '../data/DilligenceIsTheMotherOfGoodLuck.png');

        const remoteFilePath = await browser.uploadFile(filePath);

        //removing hidden class

        await browser.execute("document.querySelector('#upfile_1').className=''")
        
        await $('#upfile_1').setValue(remoteFilePath);

        await $('#upload_1').click();

        //assertion

        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});