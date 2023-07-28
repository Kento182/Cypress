/// <reference types="cypress" />

describe('Introducción a los assert', () =>{
    it("Demo de los Assert", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").type("Ricardo")
        cy.get('#wsf-1-field-22').should("be.visible").type("González")
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("kento@gmail.com")
    })
    
  })