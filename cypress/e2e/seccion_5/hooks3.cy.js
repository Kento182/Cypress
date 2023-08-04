/// <reference types='cypress'/>

describe('Reto de Hooks', () =>{
    let tiempo=1000

    before('Inicio', () => {
        cy.log("Inicio del reto")
    })

    beforeEach('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
    })

    afterEach('Fin del test', () =>{
        cy.log("Fin del test")
    })

    after('Fin de todos los test', () => {
        cy.wait(tiempo)
        cy.get('.oxd-userdropdown-tab').should('be.visible').click()
        cy.wait(tiempo)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click()
        cy.log("Fin del reto")
    })
    it('test uno',() =>{        
        cy.wait(tiempo)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
    })

    it('test dos',() =>{        
        cy.wait(tiempo)
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click()
    })

    it('test tres',() =>{        
        cy.wait(tiempo)
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible').click()        
    })    
})