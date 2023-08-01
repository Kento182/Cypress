/// <reference types="cypress" />

describe('Referencias a Windows', () =>{
  it("Windows propiedades charset", () =>{
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq','The Number Game')

    cy.document().should("have.property","charset").and('eq','UTF-8')
  })

  it("Windows url", () =>{
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq','The Number Game')

    cy.url().should("include","random-number.html")
    cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
  })
  
})