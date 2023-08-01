/// <reference types="cypress" />

describe('Upload Files', () =>{
  it("Cargando imagenes", () =>{
    cy.visit('https://testingqarvn.com.es/upload-files/')
    cy.title().should('eq','Upload Files | TestingQaRvn')

    const ruta='d20.jpg'
    cy.get('#wsf-1-field-94').selectFile(ruta)
  })
  
})