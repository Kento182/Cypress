/// <reference types='cypress'/>

require('cypress-xpath')

describe('Custom commands', () =>{
    let tiempo=1000

    before('Inicio',() =>{        
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)
    })

    it('Demo uno', () => {
        cy.log('hola')
        cy.Texto('#wsf-1-field-21','Ricardo',tiempo)
        cy.Texto('#wsf-1-field-22','González',tiempo)
        cy.Texto_xpath("//input[@id='wsf-1-field-23']",'Gonz@gmail.com',tiempo)
        cy.Click('#wsf-1-field-27',tiempo)
    })
})