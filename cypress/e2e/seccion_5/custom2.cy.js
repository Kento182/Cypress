/// <reference types='cypress'/>

require('cypress-xpath')

describe('Reto Cypress Custom Commands', () =>{
    let tiempo=1000

    before('Inicio',() =>{
        cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('test', () => {        
        cy.Input_form_uno("Ricardo","Gonzalez","k@gmail.com","1234567890","Calles 123","Leon",tiempo)
        cy.Input_form_dos("Nevada","37000","www.k.com","Yes","Descripcon",tiempo)
    })

    it.only('nombre y correo incorrecto', () => {        
        cy.Input_form_uno("R","Gonzalez","kgmail.com","1234567890","Calles 123","Leon",tiempo)
        cy.Input_form_dos("Nevada","37000","www.k.com","Yes","Descripcon",tiempo)
        cy.Validar_error(':nth-child(2) > .inputGroupContainer > [data-bv-validator="stringLength"]',' El nombre no es valido')
        cy.Validar_error('[data-bv-validator="emailAddress"]',' El mail no es valido')
    })
})