/// <reference types="cypress" />

require('cypress-xpath')

describe('Campos de tipo fecha', () =>{
  it("Fecha uno", () =>{
    let tiempo=1000
    cy.visit('https://testingqarvn.com.es/calendarios/')
    cy.title().should('eq','Calendarios | TestingQaRvn')
    cy.wait(tiempo)

    cy.get('#wsf-1-field-78').should('be.visible').type('Agosto 8, 2022{enter}')
    cy.wait(tiempo)
    cy.get('#wsf-1-field-78').clear()
    cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]').click()
  })
  
})