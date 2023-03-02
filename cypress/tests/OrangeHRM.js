import LoginPage from "../model/pages/LoginPage";

describe('Sauce demo test', () => {
    it('', () => {
        cy.visit("");
        let userName = 'Admin';
        let password = 'admin123';
        let loginPage = new LoginPage();
        loginPage.loginWithCredentials(userName, password);
        cy.wait(2000);
    });
});