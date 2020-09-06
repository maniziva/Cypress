describe('SimpleFormDemo', function(){
    it('SimpleFormDemo',function(){

        //BaseURL
        cy.visit('https://www.seleniumeasy.com/test/')

        //dropdown
        cy.get('#at-cv-lightbox-close').click()
        cy.get('.dropdown-toggle').eq(0).click()
        .type('{downarrow}')
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()                //Navigate
        cy.url().should('include','/basic-first-form-demo.html').then(() => {

        //Message
        cy.get('#user-message').type('Good morning')
        cy.get('.btn-default').eq(0).click()
        cy.get('#display').should('have.text','Good morning')

        //Total
        var a=1
        var b=2
        var c=a+b
        cy.log(c)

        cy.get('#sum1').type(a)
        cy.get('#sum2').type(b)
        cy.get('.btn-default').eq(1).click()
        cy.get('#displayvalue').should('have.text',c)


    })

    })
})