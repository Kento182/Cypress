class ProyectoUno_PO{

    visitPage(){
        let tiempo=1000
        before('',() =>{
            cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    bloqueUno(name, lastn, mail, phone, tiempo){
        cy.Texto(':nth-child(2) > .inputGroupContainer > .input-group > .form-control',name,tiempo)
        cy.Texto(':nth-child(3) > .inputGroupContainer > .input-group > .form-control',lastn,tiempo)
        cy.Texto(':nth-child(4) > .inputGroupContainer > .input-group > .form-control',mail,tiempo)
        cy.Texto(':nth-child(5) > .inputGroupContainer > .input-group > .form-control',phone,tiempo)
    }

    bloqueDos(adress, city, state, zip, tiempo){
        cy.Texto(':nth-child(6) > .inputGroupContainer > .input-group > .form-control',adress,tiempo)
        cy.Texto(':nth-child(7) > .inputGroupContainer > .input-group > .form-control',city,tiempo)
        cy.get('.selectContainer > .input-group > .form-control').should('be.visible').select(state)
        cy.Texto(':nth-child(9) > .inputGroupContainer > .input-group > .form-control',zip,tiempo)
    }

    bloqueTres(web, host, desc, tiempo){
        cy.Texto(':nth-child(10) > .inputGroupContainer > .input-group > .form-control',web,tiempo)
        if(host=='Yes'){
            cy.get(':nth-child(1) > label').should('be.visible').click()
        }else if(host=='No'){
            cy.get('div.col-md-4 > :nth-child(2) > label').should('be.visible').click
        }
        cy.Texto(':nth-child(12) > .inputGroupContainer > .input-group > .form-control',desc,tiempo)
        cy.Click('.btn',tiempo)
    }
}//final

export default ProyectoUno_PO