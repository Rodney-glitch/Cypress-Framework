/// <reference types= "cypress" />

const data = require('../fixtures/jsonData.config.json')

import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

Cypress.Commands.add('login', (email, password)=>{
    loginPage.getEmailField().focus().clear({force:true}).type(email);
    loginPage.getPasswordField().focus().clear({force:true}).type(password)
    loginPage.getSubmitBtn().click()
})