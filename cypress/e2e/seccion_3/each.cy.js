/// <reference types="cypress" />

describe('Bucles For y Each', () =>{
  it("For uno", () =>{
    for(let i=1; i<=100; i++){
      cy.log(i+" Ricardo")
    }
  })

  it("For dos", () =>{
    for(let i=1; i<=10; i++){
      let t=5
      cy.log(t+" X "+i+" = "+(t*i))
    }
  })

  it("Each uno", () =>{
    let tiempo=1000
    cy.visit('https://www.tiendaauka.com/productos/')
    cy.title().should('eq','Comprá online productos en auka.tienda')
    cy.wait(tiempo)

    cy.get(".item-info").each(($el,index,$list) =>{      
      cy.log($el.text())
    })
  })

  it("Each dos", () =>{
    let tiempo=1000
    cy.visit('https://www.tiendaauka.com/productos/')
    cy.title().should('eq','Comprá online productos en auka.tienda')
    cy.wait(tiempo)

    cy.get(".item-info").each(($el,index,$list) =>{      
      // cy.log($el.text())
      let ropa=$el.text()
      if(ropa.includes("REMERAS UNISEX FOO FIGTHER")){
        cy.wrap($el).click()
      }
    })
  })

  it.only("Each tres", () =>{
    let tiempo=1000
    const datos=[]
    cy.visit('https://www.tiendaauka.com/productos/')
    cy.title().should('eq','Comprá online productos en auka.tienda')
    cy.wait(tiempo)

    cy.get(".item-info").each(($el,index,$list) =>{      
      datos[index]=$el.text()      
    }).then(() =>{
      for(let i=0; i<=datos.length-1; i++){
        cy.get(".item-info").eq(i).click()
        cy.wait(tiempo)
        cy.get('.js-prod-submit-form').should('be.visible').click()
        cy.get('.js-cart-quantity-input').should('be.visible').clear().type(4)
        cy.get('#ajax-cart-submit-div > .btn').should('be.visible').click()
        cy.wait(tiempo)
        cy.visit('https://www.tiendaauka.com/productos/')
      }
    })

    
  })
  
})