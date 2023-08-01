/// <reference types="cypress" />

describe('Asserts', () =>{
  it("Assert contains", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#top-menu > #menu-item-179 > [href="https://testingqarvn.com.es/practicas-qa/"]').contains("Prácticas QA").click()
  })

  it("Assert find, eq", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('.menu-item').find('.menu-item-type-post_type').eq(8)
    cy.get('#wsf-1-label-21').then((e) =>{      
      let estado=e.text()      
      if(estado=="Nombre:"){
        cy.log("La etiqueta es correcta")
      }
    })
  })

  it("Assert find, eq, validación", () =>{
    cy.visit('https://www.demoblaze.com/')
    cy.title().should('eq','STORE')

    cy.get(':nth-child(1) > .card > .card-block > h5').then((e) =>{
      cy.log(e.text())
      let precio=e.text()
      precio=precio.slice(1)
      cy.log(precio)
      if(precio > 380){
        cy.log("El celular sale del presupuesto")
      }else{
        cy.log("El celular esta dentro del presupuesto")
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('be.visible').click()
        cy.get('.col-sm-12 > .btn').should('be.visible').click()
        cy.get('#cartur').should('be.visible').click()
      }
    })
  })

  it("Assert contain.text y have.text", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')  
    
    cy.get('#wsf-1-field-21').should('be.visible').type('Ricardo')
    cy.get('#wsf-1-field-22').should('be.visible').type('González')
    cy.get('#wsf-1-field-27').should('be.visible').click()

    cy.get('p').should("have.text","Gracias por tu encuesta.")
    cy.get('p').should("contain.text","Gracias")
  })

  it("Assert have.value mas then", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#wsf-1-field-21').should('be.visible').type('Ricardo')
    cy.get('#wsf-1-field-21').should('have.value','Ricardo').then(() =>{
      cy.get('#wsf-1-field-22').should('be.visible').type('González')
      cy.get('#wsf-1-field-27').should('be.visible').click()      
    })
  })

  it("Assert have.class", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#wsf-1-field-21').should('be.visible').should('have.class','wsf-field').then(() =>{
      cy.get('#wsf-1-field-21').type('Ricardo')
    })
  })

  it("Assert have.class y and", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#wsf-1-field-21').should('be.visible').and('have.class','wsf-field').then(() =>{
      cy.get('#wsf-1-field-21').type('Ricardo')
    })
  })

  it("Assert have.class y and", () =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')

    cy.get('#wsf-1-field-21').should('be.visible').and('not.have.class','wsf-field5550').then(() =>{
      cy.get('#wsf-1-field-21').type('Ricardo')
    })
  })

  it("Assert length y css", () =>{
    cy.visit('https://computer-database.gatling.io/computers')
    cy.title().should('eq','Computers database')
    
    cy.get('.computers >tr >td').should('have.length',0)
    cy.get('.computers').should('have.css','padding','0px')
  })

  it("Assert contains", () =>{
    let tiempo=1000

    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(tiempo)

    cy.contains("[type='submit']","Submit").should('be.visible').click({force:true})
  })

  it.only("Reto Asserts e Invoke", () =>{
    let tiempo=1000

    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.wait(tiempo)

    let name="Ricardo"
    let last_name="González"
    let phone=477

    cy.get('#wsf-1-field-21').should('be.visible').and('have.class','wsf-field').type(name)
    cy.get('#wsf-1-field-22').should('be.visible').and('have.class','wsf-field').type(last_name)

    cy.get('#wsf-1-field-24').should('be.visible').and('have.class','wsf-field').type(phone)
    cy.get('#wsf-1-field-24').should('be.visible').then((e) =>{
      cy.log(phone)
      if(phone!=477){
        cy.log("No es un número de León")
      }else{
        cy.log("Es un número de León")
        cy.get('#wsf-1-field-24').should('be.visible').and('have.class','wsf-field').clear().type(4776767182)
        cy.get('#wsf-1-field-24').invoke('attr','style','color:red')
      }
    })

    // cy.contains("[type='submit']","Submit").should('be.visible').click({force:true})
  })
  
})