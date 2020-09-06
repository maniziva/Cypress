describe('SimpleFormDemo', function(){
    it('SimpleFormDemo',function(){

        //BaseURL
        cy.visit('https://www.seleniumeasy.com/test/')

        //dropdown
        cy.get('#at-cv-lightbox-close').click()
        cy.get('.dropdown-toggle').eq(0).click()
        .type('{downarrow}')
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click() 
        cy.url().should('include','/basic-checkbox-demo.html').then(() => {

        //Single Checkbox Demo
        cy.get('#isAgeSelected').check().should('be.checked')

        //Multiple Checkbox Demo
        cy.get('.cb1-element').eq(0).check().should('be.checked')
        cy.get('.cb1-element').eq(1).check().should('be.checked')
        cy.get('.cb1-element').eq(0).uncheck().should('not.be.checked')

        //CheckAll
        cy.get('#check1').click()
        cy.get('.cb1-element').should('be.checked')

        })

    })
})