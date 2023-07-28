/// <reference types="cypress" />

require('cypress-xpath')

describe('Tipos de Selectores', () =>{
  it("Selector por id", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(1000)

    cy.get("#wsf-1-field-21").should('be.visible').type("Kento")
    cy.get('#wsf-1-field-22').should('be.visible').type("González")
  })

  it("Selector por Atributo", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(1000)

    cy.get("[placeholder='Nombre:']").should('be.visible').type("Kento")
    cy.get("[placeholder='Apellidos']").should('be.visible').type("González")
  })

  it("Selector por Xpath", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(1000)

    cy.xpath("//input[@id='wsf-1-field-21']").should('be.visible').type("Kento")
    cy.xpath("//input[@id='wsf-1-field-22']").should('be.visible').type("González")
  })

  it("Selector por Contains", () =>{
    cy.visit('https://testingqarvn.com.es/radio-buttons/')
    cy.title().should('eq','Radio Buttons | TestingQaRvn')
    cy.wait(1000)

    cy.get('#wsf-1-label-44-row-1').contains('CypressIO').click()
  })
  
  it.only("Selector por copy_selector", () =>{
    cy.visit('https://testingqarvn.com.es/radio-buttons/')
    cy.title().should('eq','Radio Buttons | TestingQaRvn')
    cy.wait(1000)

    cy.get('#wsf-1-field-37').should('be.visible').type("Kento")
  })
})