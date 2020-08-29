/// <reference types="Cypress"/>
describe('My First Test Suite', function(){
it('My First Test case',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //cy.get('.cart-icon > img').click()
    cy.wait(5000)
    cy.get('.search-keyword').type("Brocolli")
    cy.wait(2000)
    cy.get('.product-action > button').click()
    cy.wait(2000)
    cy.get('.cart-icon > img').click()
    cy.wait(2000)
    cy.get('.action-block:visible').click()
    //.find("PROCEED TO CHECKOUT")
    cy.wait(10000)
})

})