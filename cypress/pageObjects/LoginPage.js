class LoginPage{
    getEmailField(){
        return cy.get('#email')
    }
    getPasswordField(){
        return cy.get('#password')
    }
    getSubmitBtn(){
        return cy.get('.submit-btn')
    }
    getAlert(){
        return cy.get('.vh')
    }
    getAlertCancelBtn(){
        return cy.get('.bBe')
    }
}

export default LoginPage;