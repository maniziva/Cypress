//const { contains } = require("cypress/types/jquery")

describe('My First Test Suite', function(){
    it('My First Test case',function(){

//Navigate URL
cy.visit('http://tutorialsninja.com/demo/')

//Search Products
cy.get('.input-lg').type('MacBook')
cy.get('.input-group-btn').click()

//Add to card

cy.get('.product-thumb').log()



cy.get(".product-thumb").each(($e1, index, $list) => {

const text=$e1.text()
if(text.includes("Add to Cart"))
{
cy.get('span.hidden-md').first().click()
cy.wait(5000)

}

}


)



//.should('have.value','Add to Cart').click()



    })
})