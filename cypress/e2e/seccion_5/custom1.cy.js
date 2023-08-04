/// <reference types='cypress'/>

describe('Custom commands', () =>{
    let tiempo=1000

    before('Inicio',() =>{        
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)
    })

    it('Demo uno', () => {
        cy.log('hola')
        cy.texto_visible('#wsf-1-field-21','Ricardo',tiempo)
        cy.texto_visible('#wsf-1-field-22','González',tiempo)
        cy.texto_visible('#wsf-1-field-23','González@gmail.com',tiempo)
    })
})