const { describe } = require("mocha");

describe('Home Page',() => {

    it('app should stay online',() => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('[id="page-home"] main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })


})