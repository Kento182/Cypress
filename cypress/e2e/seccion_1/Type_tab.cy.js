/// <reference types="cypress" />

require('cypress-plugin-tab')

describe('Ejemplo funcion Tab', () =>{
    it("Type con Tab", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type("Ricardo").tab().
        type("González Ramírez").tab().
        type("kento@gmail.com")
    })
    
  })