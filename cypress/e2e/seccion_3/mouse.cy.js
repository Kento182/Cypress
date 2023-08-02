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

  it("Drag and Drop 2", () =>{
    let tiempo=1000
    cy.visit('https://www.e-education.psu.edu/geog777/h5p/embed/1950')
    cy.title().should('eq','Drag and Drop Test')

    cy.wait(tiempo)
    cy.xpath("//span[normalize-space()='Rightamundo']", {force:true}).drag("(//div[contains(@class,'h5p-inner ui-droppable')])[2]", {force:true})
    // cy.get('#column-b').drag('#column-a',{force:true})
  })

  it("Mouse over 1", () =>{
    let tiempo=1000
    cy.visit('https://unixpapa.com/js/testover.html')
    cy.title().should('eq','Mouseover Event Test Page')
    cy.wait(tiempo)
    
    cy.get('#red').trigger('mouseover')
  })

  it("Mouse over 2", () =>{
    let tiempo=1000
    cy.visit('https://www.way2automation.com/')
    cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')
    cy.wait(tiempo)

    cy.get('#menu-item-27617 > [href="#"]').trigger('mouseover')    
  })

  it.only("Slider", () =>{
    let tiempo=1000
    cy.visit('https://www.magentaa11y.com/checklist-web/range-slider/')
    // cy.title().should('eq','range slider + datalist test')
    cy.wait(tiempo)

    cy.scrollTo(0,2000)
    cy.wait(tiempo)
    cy.get('#cowbell-range').invoke('attr','value','5')
  })
  
})