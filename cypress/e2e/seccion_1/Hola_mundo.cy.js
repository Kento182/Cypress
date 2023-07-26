/// <reference types="cypress" />

describe('Primer test con Cypress', () =>{
  it("Esto es un hola mundo desde Cypress", () =>{
    cy.log("Bienvenido a Cypress")
  })
  it("Segundo test -> Campo name", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')

    cy.get('#wsf-1-field-21').type('Ricardo')
    cy.get('#wsf-1-field-22').type('González')
    cy.get('#wsf-1-field-23').type('Kento@gmail.com')
    cy.get('#wsf-1-field-24').type('1234567890')
    cy.get('#wsf-1-field-28').type('Calle 123')
    cy.get('#wsf-1-field-27').click()
    cy.wait(2000)
  })
})//Cierre de describe