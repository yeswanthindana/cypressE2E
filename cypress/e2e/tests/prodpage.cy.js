import {Loginpage} from '../../pages/loginpage';
import {Homepage} from '../../pages/homepage';

import { Prodpage } from '../../pages/prodpage'


const hp = new Homepage();
const lp = new Loginpage();
const pp = new Prodpage();


import logindata from '../../fixtures/logindata.json'       




describe('Prod page tests', () => 
    {   

        before( ()=>
            {
                cy.Login(logindata.email,logindata.password)
            }
        
            )

        it('Prod functionality', () => {

            // hp.visitHomepage();
            // hp.clickonMyaccount();
            // hp.clickonLogin();

            // cy.url().should('eq',Cypress.env('loginurl'));
            // lp.enterUsername(logindata.email)
            // lp.enterPassword(logindata.password);
            // lp.clickLogin();


            pp.enterProductName('Samsung SyncMaster')
            pp.clickSearchButton();
            pp.clickProduct();
            pp.clickAddToCart();
            pp.clickHomeIcon();
            pp.clickCartIcon();
            pp.clickViewCart();
            pp.verifyprodname();
           
            
     
        }
    )

    
        after( () =>
        {
        cy.Logout()
        }
    )
    }
    )



    