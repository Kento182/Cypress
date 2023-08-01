/// <reference types="cypress" />

require("@4tw/cypress-drag-drop")
require('cypress-xpath')

describe('Cypress eventos Mouse', () =>{
  it("Drag and Drop", () =>{
    let tiempo=1000
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.title().should('eq','The Internet')

    cy.wait(tiempo)
    cy.get('#column-b').drag('#column-a',{force:true})
  })

  it.only("Drag and Drop 2", () =>{
    let tiempo=1000
    cy.visit('https://www.e-education.psu.edu/geog777/h5p/embed/1950')
    cy.title().should('eq','Drag and Drop Test')

    cy.wait(tiempo)
    cy.xpath("//span[normalize-space()='Rightamundo']", {force:true}).drag("(//div[contains(@class,'h5p-inner ui-droppable')])[2]", {force:true})
    // cy.get('#column-b').drag('#column-a',{force:true})
  })
  
})