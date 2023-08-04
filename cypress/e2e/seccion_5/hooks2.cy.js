/// <reference types='cypress'/>

describe('Hooks Ejemplos', () =>{
    let tiempo=1000

    before('Inicio', () => {
        cy.log('Inicio de los test')
    })

    beforeEach('Inicio de cada test',() =>{        
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })

    it('Test uno', () => {
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () => {
        cy.get(':nth-child(3) > input').invoke('removeAttr','value checked disabled')
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(tiempo)
    })

    it('Test tres', () => {
        cy.get(':nth-child(5) > label > .cb1-element').check().should('be.checked')
        cy.wait(tiempo)
    })
})