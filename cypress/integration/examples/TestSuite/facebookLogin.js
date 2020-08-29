/// <reference types="Cypress"/>
describe('My First Test Suite', function(){
    it('My First Test case',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').click()
        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()

        //cy.get('').type('manizivamsd@gmail.com')
       

    })

})