/// <reference types= "cypress" />

import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

Cypress.Commands.add('checkAlert', (message)=>{
    loginPage.getAlert().should('be.visible').and('contain.text', message)
    loginPage.getAlertCancelBtn().click()
})