/// <reference types="cypress"/>

describe('Configuración y uso de los Snippets', () =>{
    it('snippets uno',() =>{
        let tiempo=1000
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)
    })
})

// c_plantilla_cypress --> snippet