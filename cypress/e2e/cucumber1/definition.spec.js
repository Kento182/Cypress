Given('Abrir el navegador principal', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
})
When('Cargando el nombre', () => {
    cy.Texto('#wsf-1-field-21','Ricardo',500)
})
When('Cargando el apelldio', () => {
    cy.Texto('#wsf-1-field-22','González',500)
})
And('Cargando el email', () => {
    cy.Texto('#wsf-1-field-23','k@gmail.com',500)
})
Then('Validar el nombre de la página', () => {
    cy.title().should('eq','Datos Personales | TestingQaRvn')
})