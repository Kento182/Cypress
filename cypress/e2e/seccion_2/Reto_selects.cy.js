/// <reference types="cypress" />

describe('Reto Selects', () =>{
  it("Reto", () =>{
    cy.visit('https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/')
    cy.title().should('eq','jQuery Dual List Box Demo')

    cy.get('.unselected').should('be.visible').select(["Ada Burke","Adele Pratt","Agnes Delgado"]).then(() =>{
      cy.get('.str').should('be.visible').click().then(() =>{
        cy.get('.atr').should('be.visible').click().then(() =>{
          cy.get('.atl').should('be.visible').click().then(() =>{
            cy.log("Se movieron todos los elementos")
          })
        })
      })
    })
  })
  
})