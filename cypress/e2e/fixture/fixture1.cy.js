/// <reference types='cypress'/>

require('cypress-xpath')

describe('Carga por Fixture', () =>{
    let tiempo=1000

    before('Inicio',() =>{
        //cy.fixture('datos').then((data) => {
        //    globalThis.data=data
        //})
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)
    })

    it('Test uno: Cargando desde json', () => {
        cy.Texto('#wsf-1-field-21',data.name,tiempo)
        cy.Texto('#wsf-1-field-22',data.surname,tiempo)
        cy.Texto('#wsf-1-field-23',data.email,tiempo)
        cy.Texto('#wsf-1-field-24',data.phone,tiempo)
        cy.Texto('#wsf-1-field-28',data.phone,tiempo)
        cy.Click('#wsf-1-field-27',tiempo)
    })
})