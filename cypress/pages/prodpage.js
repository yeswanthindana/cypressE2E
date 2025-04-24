export class Prodpage{
weblocators = {
    textbox : 'input[placeholder="Search"]',
    searchbtn : "button[class='btn btn-default btn-lg']",
    prod : "div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) h4:nth-child(1) a:nth-child(1)",
    addtocart : "#button-cart",
    homeicon : ".fa.fa-home",
    carticon : "#cart-total",
    viewcart : "body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1) > strong:nth-child(1)",
    prodname : "body > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1)"

}

enterProductName(prodname){
    cy.get(this.weblocators.textbox).type(prodname);
}
clickSearchButton(){
    cy.get(this.weblocators.searchbtn).click();
}

clickProduct(){
    cy.get(this.weblocators.prod).click();
}

clickAddToCart(){
    cy.get(this.weblocators.addtocart).click();
}

clickHomeIcon(){
    cy.get(this.weblocators.homeicon).click();
}

clickCartIcon(){
    cy.get(this.weblocators.carticon).click();
}
clickViewCart(){
    cy.get(this.weblocators.viewcart).click();
}

verifyprodname(){
    cy.get(this.weblocators.prodname).should('contains.text','Samsung SyncMaster 941BW')
}
}