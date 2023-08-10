/// <reference types='cypress'/>

describe('Metodos de carga por randoms', () =>{
    let tiempo=500
    let numero_pruebas=5
    it('',() =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        // cy.title().should('eq','')
        cy.wait(tiempo)
        for(let n=1; n<=numero_pruebas; n++){
            let cantidad=Math.floor(Math.random()*90000)
            cy.get('#wsf-1-field-21').type('Ricardo'+cantidad)
            cy.get('#wsf-1-field-22').type('González'+cantidad)
            cy.get('#wsf-1-field-23').type('Kento@gmail.com'+cantidad)
            cy.get('#wsf-1-field-24').type('1234567890'+cantidad)
            cy.get('#wsf-1-field-28').type('Calle 123'+cantidad)
            cy.get('#wsf-1-field-27').click()
            cy.wait(tiempo)
            cy.visit('https://testingqarvn.com.es/datos-personales/')
        }        
    })
})