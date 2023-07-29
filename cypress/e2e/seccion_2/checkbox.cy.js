/// <reference types="cypress" />

describe('Checkboxs', () =>{
    it("Check uno", () =>{
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.wait(1500)

        cy.get('#wsf-1-label-36-row-1').should('be.visible').click()
        cy.get('#wsf-1-label-36-row-3').should('be.visible').click()
    })
    
    it.only("Check uno", () =>{
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.wait(1500)

        cy.get('#wsf-1-label-44-row-2').should('be.visible').click()
        cy.get('#wsf-1-label-44-row-1').should('be.visible').click()
    })
})