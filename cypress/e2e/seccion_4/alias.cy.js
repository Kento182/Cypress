/// <reference types="cypress" />

describe('Alias en cypress', () =>{
  it("Alias uno", () =>{
    let tiempo=1000
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('#firstname').should('be.visible').as('name')
    cy.get('#surname').should('be.visible').as('sur')
    cy.get('#age').should('be.visible').as('age')
    cy.get('#country').should('be.visible').as('country')
    cy.get('#notes').should('be.visible').as('note')
    cy.get('[type="submit"]').should('be.visible').as('boton')

    cy.get('@name').type("Ricardo")
    cy.get('@sur').type("González Ramírez")
    cy.get('@age').type("42")
    cy.get('@country').select("Mexico")
    cy.get('@note').type('Nota')
    cy.get('@boton').click()
  })
  
})