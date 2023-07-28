/// <reference types="cypress" />

describe('Primer Reto', () =>{
  it("", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#wsf-1-field-21').should('be.visible').type("Ricardo")
    cy.get('#wsf-1-field-21').should('be.visible').clear().wait(1000) //clear() --> para limpiar un campo
    cy.get('#wsf-1-field-21').should('be.visible').type("Ricardo")
    cy.get('#wsf-1-field-22').should('be.visible').type("González")
    cy.get('#wsf-1-field-23').should('be.visible').type("kento@gmail.com")
    cy.get('#wsf-1-field-24').should('be.visible').type("1234567890")
    cy.get('#wsf-1-field-28').should('be.visible').type("calle 123")
    cy.get('#wsf-1-field-27').should('be.visible').click()

  })
  
})