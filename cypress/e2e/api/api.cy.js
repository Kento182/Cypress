/// <reference types='cypress'/>

describe('Demo de una Rest Api', () =>{
    it('Test uno',() =>{
        
        const datos={
            "Name": "Ricardo",
            "Ap": "González",
            "Am": "Ramírez",
            "Phone": "1234567890",
            "Dir": "Calle 123"
        }

        cy.log(datos["Name"])
        cy.log(datos["Ap"])
        cy.log(datos["Am"])
        cy.log(datos["Phone"])
        cy.log(datos["Dir"])
    })
})