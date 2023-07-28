/// <reference types="cypress" />

describe('Sección 1 Validando el titulo', () =>{
    it("Test Validar el titulo", () =>{
      cy.visit('https://testingqarvn.com.es/datos-personales/')
      cy.title().should('eq','Datos Personales | TestingQaRvn')

      cy.log("Ok función title")
    })
    
  })