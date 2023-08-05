// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto', (selector, texto, tiempo) => {
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_xpath', (xpath, texto, tiempo) => {
    cy.xpath(xpath).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click', (selector, tiempo) => {
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Validar_error', (selector, mensaje) => {
    cy.get(selector).should('be.visible').then((val) => {
        cy.log(val.text()+mensaje)
    })
})


// Comandos por bloque
// Demo Seleniumeasy

Cypress.Commands.add('Input_form_uno', (name, lastn, mail, phone, adress, city, tiempo) => {
    cy.Texto(':nth-child(2) > .inputGroupContainer > .input-group > .form-control',name,tiempo)
    cy.Texto(':nth-child(3) > .inputGroupContainer > .input-group > .form-control',lastn,tiempo)
    cy.Texto(':nth-child(4) > .inputGroupContainer > .input-group > .form-control',mail,tiempo)
    cy.Texto(':nth-child(5) > .inputGroupContainer > .input-group > .form-control',phone,tiempo)
    cy.Texto(':nth-child(6) > .inputGroupContainer > .input-group > .form-control',adress,tiempo)
    cy.Texto(':nth-child(7) > .inputGroupContainer > .input-group > .form-control',city,tiempo)
})

Cypress.Commands.add('Input_form_dos', (state, zip, web, host, desc, tiempo) => {    
    cy.get('.selectContainer > .input-group > .form-control').should('be.visible').select(state)
    cy.Texto(':nth-child(9) > .inputGroupContainer > .input-group > .form-control',zip,tiempo)
    cy.Texto(':nth-child(10) > .inputGroupContainer > .input-group > .form-control',web,tiempo)
    if(host=='Yes'){
        cy.get(':nth-child(1) > label').should('be.visible').click()
    }else if(host=='No'){
        cy.get('div.col-md-4 > :nth-child(2) > label').should('be.visible').click
    }
    cy.Texto(':nth-child(12) > .inputGroupContainer > .input-group > .form-control',desc,tiempo)
    cy.Click('.btn',tiempo)    
})