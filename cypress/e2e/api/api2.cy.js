/// <reference types='cypress'/>

describe('Demo de una Rest Api 2', () =>{
    it('Test uno',() =>{
        
        const datos={
            "Name": "Ricardo",
            "Ap": "González",
            "Am": "Ramírez",
            "Phone": "1234567890",
            "Dir": "Calle 123",
            "Cursos":[
                {
                    "Nombre": "Php",
                    "Desc": "Lenguaje de programación Php"
                },
                {
                    "Nombre": "Java",
                    "Desc": "Lenguaje de programación Java"
                },
                {
                    "Nombre": "Python",
                    "Desc": "Lenguaje de programación Python"
                },
            ]
        }

        // cy.log(datos["Name"])
        // cy.log(datos["Ap"])
        // cy.log(datos["Am"])
        // cy.log(datos["Phone"])
        // cy.log(datos["Dir"])

        cy.log(datos.Name)
        cy.log(datos.Ap)
        cy.log(datos.Am)
        cy.log(datos.Phone)
        cy.log(datos.Dir)
        cy.log(datos.Cursos[1].Nombre)
    })
})