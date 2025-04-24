export class Loginpage{

    weblocators = {
        uname : '#input-email',
        pwd : '#input-password',
        login : 'input[value="Login"]'
    }

    enterUsername(uname){
        cy.get(this.weblocators.uname).type(uname)
    }

    enterPassword(pwd){
        cy.get(this.weblocators.pwd).type(pwd)
    }
    clickLogin(){
        cy.get(this.weblocators.login).click()
    }
}


