/// <reference types='cypress'/>

describe('Record Cypress Studio', () =>{
    it('Invoke test',() =>{
        let tiempo=1000        
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('tr:nth-child(1) input').click();
        cy.get('tr:nth-child(1) input').type('ricardo');
        cy.get('tr:nth-child(2) input').click();
        cy.get('tr:nth-child(2) input').type('1234');
        cy.get('textarea').click();
        cy.get('textarea').clear().type('Comments...hi');
        cy.get('tr:nth-child(5) input:nth-child(2)').click();
        cy.get('tr:nth-child(5) input:nth-child(3)').click();
        cy.get('tr:nth-child(5) input:nth-child(4)').click();
        cy.get('tr:nth-child(6) input:nth-child(4)').click();
        cy.get('tr:nth-child(7) select').type('ms3');
        cy.get('tr:nth-child(7) option:nth-child(3)').click();
        cy.get('tr:nth-child(8) select').select(3)
        cy.get('.styled-click-button:nth-child(2)').click();
        cy.url().should('contains', 'https://testpages.herokuapp.com/styled/the_form_processor.php');
        cy.get('#back_to_form').click()
        cy.url().should('contains', 'https://testpages.herokuapp.com/styled/basic-html-form-test.html');


    })
})