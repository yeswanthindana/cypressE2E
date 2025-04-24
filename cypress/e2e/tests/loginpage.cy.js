import {Loginpage} from '../../pages/loginpage';
import {Homepage} from '../../pages/homepage';




const hp = new Homepage();
const lp = new Loginpage();


import logindata from '../../fixtures/logindata.json'

describe('Login page tests', () => 
    {
        it('Login with valid credentials', () => {

            hp.visitHomepage();
            hp.clickonMyaccount();
            hp.clickonLogin();

            cy.url().should('eq',Cypress.env('loginurl'));
            lp.enterUsername(logindata.email)
            lp.enterPassword(logindata.password);
            lp.clickLogin();
           
            
     
        }
    )
    }  
) 
    