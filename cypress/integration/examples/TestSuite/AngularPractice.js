describe('My First Test Suite', function(){
    it('My First Test case',function(){

        //Mail ID
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('#email1').type('manizivamsd@gmail.com').should('have.value','manizivamsd@gmail.com')
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{selectall}{backspace}')
        const todaysDate = Cypress.moment().format('YYYY/MM/DD')
        cy.get('#email1').type(todaysDate).should('have.value','2020/08/30')

        //Disable field
        cy.get('.action-disabled').type('Hai',{force: true})

        //Password
        cy.get('.action-focus').focus().type(todaysDate).clear()
        cy.scrollTo(0,0)

    
        //action
        cy.get('#action-canvas')
        .click(80, 75)
       .click(170, 75)
       .click(80, 165)
       .click(100, 185)
       .click(125, 190)
       .click(150, 185)
       .click(170, 165)
    

       cy.window().should('have.property', 'top')
        cy.get('title')
        .should(($p) => {

            expect($p.to.include('Cypress.io: Kitchen Sink'))

        })
       // should('have.value','Cypress.io: Kitchen Sink')
       //cy.title().should('have.text()', 'Kitchen Sink')

    })
    })