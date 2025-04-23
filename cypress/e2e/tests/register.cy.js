import {Registerpage } from "../../pages/registerpage"


const rp = new Registerpage()
import registerdata from '../../fixtures/registerdata.json'

 describe('testautomation',()=>
    {
        it('register flow', ()=>
        {
            rp.openURL()
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