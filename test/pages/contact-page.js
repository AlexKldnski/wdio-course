import NavComponent from "./components/nav-comp";

class ContactPage {

    open() {
        return browser.url('/contact');
    }

    get nameInputField() {
        return $("//*[@class='everest-form']//span[text()='Name']/following::input[1]");
    }

    get emailInputField() {
        return $("//*[@class='everest-form']//span[text()='Email']/following::input[1]");
    }

    get phoneInputField() {
        return $("//*[@class='everest-form']//span[text()='Phone']/following::input[1]");
    }

    get messageInputField() {
        return $("//*[@class='everest-form']//span[text()='Message']/following::textarea");
    }

    get submitBtn() {
    return $('button[type=submit]');
    }

    get successNotice() {
        return $("//*[@role='alert']");
        }

    async submitForm(name, email, phone, message) {
        await this.nameInputField.addValue(name);
        await this.emailInputField.addValue(email);
        await this.phoneInputField.addValue(phone);
        await this.messageInputField.addValue(message);
        await this.submitBtn.click();
    }
    
    get NavComponent() {

        return NavComponent;
    }

}
export default new ContactPage();