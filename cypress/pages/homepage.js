

export class Homepage{

   webloactors = {

    login : '.dropdown-menu > :nth-child(2) > a',
    myaccoynt : '.list-inline > .dropdown > .dropdown-toggle',
    register : "li[class='dropdown open'] li:nth-child(1) a:nth-child(1)"
   }
   visitHomepage(){
    cy.visit(Cypress.env('baseurl'));
     }

    clickonMyaccount(){
        
        cy.get(this.webloactors.myaccoynt).click();
     }

    clickonLogin(){
        cy.get(this.webloactors.login).click();
     }

     clickonRegister(){
      cy.get(this.webloactors.register).click();
     }
    }