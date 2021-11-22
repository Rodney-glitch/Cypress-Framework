/// <reference types= "cypress" />

const data = require('../fixtures/jsonData.config.json')

import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

const validEmail = data.login.valid_email
const validPassword = data.login.valid_password
const nonExistingEmail = data.login.non_existing_email
const invalidEmail = data.login.invalid_email

describe('Login Module', ()=>{
    before('Open Base URL', ()=>{
        cy.openUrl()
    })

    it('Verify that user cannot login with non existing email and valid password', function () {
        cy.login(nonExistingEmail, validPassword)
        cy.checkAlert('Login failed. Invalid username or password')
    });
    it('Verify that user can login with valid details', function () {
        cy.login(validEmail, validPassword)
    });
})