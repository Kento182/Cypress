/// <reference types='cypress'/>

describe('Navegación entre las páginas', () =>{
    it('Back, forward',() =>{
        let tiempo=1000
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)

        cy.get('#logo').should('be.visible').click()
        cy.wait(tiempo)
        cy.get('#top-menu > #menu-item-178 > [href="https://testingqarvn.com.es/cursos/"]').should('be.visible').click()
        cy.wait(tiempo)

        cy.go('back')
        cy.wait(tiempo)
        cy.go('back')
        cy.wait(tiempo)
        cy.go('forward')
    })

    it.only('Reload',() =>{
        let tiempo=1000
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(tiempo)

        cy.get('#wsf-1-field-21').should('be.visible').type("Ricardo")
        cy.get('#wsf-1-field-22').should('be.visible').type("González")
        cy.reload()
    })
})