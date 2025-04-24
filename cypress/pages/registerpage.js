export class Registerpage {

    weblocators = {
      firstName: '#input-firstname',
      lastname: '#input-lastname',
      email: '#input-email',
      telephone: '#input-telephone',
      password: '#input-password',
      confirmPassword: '#input-confirm',
      policyCheckbox: 'input[type="checkbox"]',
      continue: '.btn.btn-primary'
    };
  
    enterFirstName(fname) {
      cy.get(this.weblocators.firstName).type(fname);
    }
  
    enterLastName(lname) {
      cy.get(this.weblocators.lastname).type(lname);
    }
  
    enterEmail(email) {
      cy.get(this.weblocators.email).type(email);
    }
  
    enterTelephone(telephone) {
      cy.get(this.weblocators.telephone).type(telephone);
    }
  
    enterPassword(password) {
      cy.get(this.weblocators.password).type(password);
    }
  
    enterConfirmPassword(password) {
      cy.get(this.weblocators.confirmPassword).type(password);
    }
  
    clickPolicyCheckbox() {
      cy.get(this.weblocators.policyCheckbox).check();
    }
  
    clickSubmitButton() {
      cy.get(this.weblocators.continue).click();
    }
  
    openURL() {
      cy.visit(Cypress.env('baseurl'));
    }
  
  }
  