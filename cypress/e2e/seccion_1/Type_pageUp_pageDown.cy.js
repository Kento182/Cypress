/// <reference types="cypress" />

describe('Ejemplo de Type pageUp, pageDown', () =>{
    it("Type pageUp", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type('{pageup}')
        cy.wait(2000)
    })

    it.only("Type pageDown", () =>{     //only --> solo para correr pruebas con only
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type('{pagedown}')
        cy.wait(2000)
    })
    
  })