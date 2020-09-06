/// <reference types="Cypress"/>
describe('Demo QA Books', function(){

  before(function(){
    cy.fixture('example').then(function(data){
    this.data=data
    cy.visit('https://demoqa.com/books')
    })
    })
/*
it('Does not catch script error', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          throw err
        })
      })*/
it('Login',function(){
//Login
cy.get('#login').click()
cy.get('#userName').type(this.data.username)
cy.get('#password').type(this.data.password)
cy.get('#login').click()
cy.get('#userName-value').should('have.text',this.data.username)

cy.get('#searchBox').type('Java')
cy.get('.action-buttons').contains('Learning JavaScript Design Patterns').click()

cy.get('.text-left.fullButton').contains('Back To Book Store').click()
})


it('Logout',function(){
//Logout

cy.get('#submit').click()

    })
})
