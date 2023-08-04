/// <reference types='cypress'/>

describe('Hooks', () =>{
    before(() => {
        cy.log("Esto inicia antes que todo una sola vez")
    })

    beforeEach(() => {
        cy.log("Esto se repite al inicio de cada uno de los test")
    })

    afterEach(() => {
        cy.log("Esto se repite al final de cada uno de los test")
    })

    after(() => {
        cy.log("Esto Finaliza todo")
    })
    
    it('Test uno',() =>{
        cy.log("Test uno")
    })

    it('Test dos',() =>{
        cy.log("Test dos")
    })
})