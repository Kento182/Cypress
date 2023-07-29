/// <reference types="cypress" />

describe('Segundo Reto', () =>{
  it("Probando la aplicación", () =>{
    cy.visit('https://computer-database.gatling.io/computers')
    cy.title().should('eq','Computers database')
    cy.wait(1500)

    cy.get('#searchbox').should('be.visible').type("ACE")
    cy.get('#searchsubmit').should('be.visible').click()

    cy.get('#add').should('be.visible').click()
    cy.get('#name').should('be.visible').type("Cypress")
    cy.get('#introduced').should('be.visible').type("2021-03-16")
    cy.get('#discontinued').should('be.visible').type("2025-03-15")
    cy.get('#company').should('be.visible').select("Nokia").should("have.value","16")
    cy.get('.primary').should('be.visible').click()
  })
  
})