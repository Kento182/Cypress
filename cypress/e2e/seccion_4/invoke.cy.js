/// <reference types="cypress" />

describe('Invoke', () =>{
  it("Invoke text", () =>{
    let tiempo=1000
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('.page-body > :nth-child(5)').invoke('text').as('info')

    cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')
    
    cy.get('[for="firstname"]').invoke('text').as('title')
    cy.get('@title').should('contain','First name:').then(() =>{
      cy.get('#firstname').type("Ricardo")
    })
  })

  it("Invoke style", () =>{
    let tiempo=1000
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('[for="firstname"]').invoke('attr','style','color:Blue; font-size:50px').as('title')
  })

  it("Invoke Hide y Show", () =>{
    let tiempo=1000
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('[for="firstname"]').invoke('hide')
    cy.get('#firstname').invoke('hide')
    cy.wait(tiempo)
    cy.get('[for="firstname"]').invoke('show')
    cy.get('#firstname').invoke('show')
  })

  it("Invoke Reto", () =>{
    let tiempo=300
    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('[for="surname"]').invoke('hide')
    cy.get('#surname').invoke('hide')
    cy.wait(tiempo)

    cy.get('[for="firstname"]').should('be.visible').type("Ricardo").then(() =>{
      cy.wait(tiempo)
      cy.get('[for="surname"]').invoke('show','3s')
      cy.get('#surname').invoke('show','3s').type("González Ramírez")
    })    
  })

  it("Invoke scr", () =>{
    let tiempo=300
    cy.visit('http://demo.seleniumeasy.com/bootstrap-modal-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
    cy.wait(tiempo)

    cy.get('.cbt').invoke('attr','src').should('include','930_180.png')
  })

  it.only("Invoke target_blank", () =>{
    let tiempo=300
    cy.visit('https://www.letskodeit.com/practice')
    cy.title().should('eq','Practice Page')
    cy.wait(tiempo)

    cy.get('#opentab').invoke('removeAttr','target').click()
  })
  
})