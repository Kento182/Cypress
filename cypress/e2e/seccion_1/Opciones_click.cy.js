/// <reference types="cypress" />

describe('Opciones de Click', () =>{
  it("Click Sencillo", () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
    cy.get('.oxd-button').should("be.visible").click().wait(1000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click().wait(1000)
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click().wait(1000)
  })

  it("Click Force true", () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
    cy.get('.oxd-button').should("be.visible").click().wait(1000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click().wait(1000)
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force: true}).wait(1000)
  })

  it.only("Click por coordenadas (x,y)", () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
    cy.get('.oxd-button').should("be.visible").click().wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5).wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(70,10).wait(1000)
  })
  
})