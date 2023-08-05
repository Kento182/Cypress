import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'
/// <reference types='cypress'/>

require('cypress-xpath')

describe('Page Objects Models', () =>{

    const master=new ProyectoUno_PO()
    let tiempo=1000

    master.visitPage()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    it('Test seccion uno', () => {
        master.bloqueUno("Ricardo","Gonzalez","k@gmail.com","1234567890",tiempo)
    })

    it('Test seccion dos', () => {        
        master.bloqueDos("Calles 123","Leon","Nevada","37000",tiempo)
    })

    it('Test seccion tres', () => {        
        master.bloqueTres("www.k.com","Yes","Descripcon",tiempo)
    })

    it.skip('Test seccion cuatro', () => {  //Telefono no valido
        master.bloqueUno("Ricardo","Gonzalez","k@gmail.com","182",tiempo)
        cy.Validar_error('[data-bv-validator="phone"]',' Telefono no valido')
    })
})