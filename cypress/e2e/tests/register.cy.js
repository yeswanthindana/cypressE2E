import {Registerpage } from "../../pages/registerpage"
import {Homepage} from '../../pages/homepage'
import { faker } from '@faker-js/faker';

const rp = new Registerpage()
const hp = new Homepage();

import registerdata from '../../fixtures/registerdata.js'

 describe('testautomation',()=>
    {
        it('register flow', ()=>
        {
            hp.visitHomepage();
            hp.clickonMyaccount();
            hp.clickonRegister();
            cy.url().should('eq',Cypress.env('registerurl'))
            
            rp.enterFirstName(registerdata.firstName)
            rp.enterLastName(registerdata.lastName)
            rp.enterEmail(registerdata.email)
            rp.enterTelephone(registerdata.telephone)
            rp.enterPassword(registerdata.password)
            rp.enterConfirmPassword(registerdata.confirmPassword)
            rp.clickPolicyCheckbox()
            rp.clickSubmitButton()
            
            console.log('Registration completed successfully')
        }
        )
    
    
    
    }
    )