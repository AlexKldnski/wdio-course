import ContactPage from '../pages/contact-page';
import * as faker from 'faker';

describe('Contact Page', () => {
    it('Send a message and assert a success message', async () => {
        
        await ContactPage.open();
        
        // await ContactPage.nameInputField.setValue('TestName');

        // await ContactPage.emailInputField.setValue('test@mail.com');

        // await ContactPage.phoneInputField.setValue('123-456-7890');
        
        // await ContactPage.messageInputField.setValue('Test text message');

        // prnting elements out
        // console.log(await $('button[type=submit]'));
        
        //Pause
        //browser.pause(5000);

        //debug
        //await browser.debug();

        // await ContactPage.submitBtn.click();

        //await ContactPage.submitForm('TestName', 'test@mail.com', '123-456-7890', 'Test text message');

        await ContactPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraphs(2));

        await expect(ContactPage.successNotice).
        toHaveTextContaining("Thanks for contacting us! We will be in touch with you shortly");

    });
    
});