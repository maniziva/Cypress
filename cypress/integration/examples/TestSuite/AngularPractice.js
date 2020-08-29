describe('My First Test Suite', function(){
    it('My First Test case',function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type('Mani')
        cy.get('#exampleCheck1').check()
        cy.get('#exampleCheck1').uncheck()
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get(':nth-child(8) > .form-control').dblclick()


    })
    })