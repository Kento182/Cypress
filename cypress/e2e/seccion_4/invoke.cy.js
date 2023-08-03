/// <reference types="cypress" />

describe('Invoke', () =>{
  it("Invoke text", () =>{
    let tiempo=1000
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('.page-body > :nth-child(5)').invoke('text').as('info')

    cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')
  })
  
})