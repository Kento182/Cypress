/// <reference types="cypress" />

require('cypress-xpath')

describe('Selects', () =>{
  it("Select uno", () =>{
    cy.visit('https://testingqarvn.com.es/combobox-dependiente/')
    cy.title().should('eq','ComboBox Dependiente | TestingQaRvn')

    cy.get('#wsf-1-field-61').should('be.visible').select("Mac").should('have.value','Mac')
    cy.get('#wsf-1-field-61').should('be.visible').select("Linux")
    cy.get('#wsf-1-field-61').should('be.visible').select("Windows")
    cy.get('#wsf-1-field-63').should('be.visible').select("Windows 10")
  })

  // Para multi select  select.(["elemento1","elemento2","elementon"])

  it("Select dos", () =>{
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')

    cy.get('#APjFqb').should('be.visible').type("Ferrari{enter}")
    cy.xpath('//div[contains(text(),"Imágenes")]').should('be.visible').click()
  })
  
})