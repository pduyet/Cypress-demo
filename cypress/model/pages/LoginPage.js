const userName = "//input[@name='username']";
const password = "//input[@name='password']";
const btnLogin = "//button[normalize-space()='Login']";

class LoginPage {
    loginWithCredentials(user, pass) {
        cy.xpath(userName).type(user);
        cy.xpath(password).type(pass);
        cy.xpath(btnLogin).click();
    }
}
module.exports = LoginPage;