/// <reference types="cypress" />

describe('Alertas en cypress', () =>{
  it("Alert uno", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/bootstrap-modal-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
    cy.wait(tiempo)

    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
    cy.wait(tiempo)
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
    cy.wait(tiempo)
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').click()
  })
  
})