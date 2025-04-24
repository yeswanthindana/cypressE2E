import { Homepage } from "../../pages/homepage"

const hp = new Homepage();


describe('Homepage',()=>
{
    it('Home page url validation',()=>
    {
        hp.visitHomepage();
        cy.url().should('eq','https://naveenautomationlabs.com/opencart/index.php')
    }
    )
}
)
