/// <reference types="cypress" />

describe('Elementos de una tabla', () =>{
  it("CHILDREN", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('.btn-group').children('.btn-success').should('contain','Green').click()
    cy.wait(tiempo)
    cy.get('.btn-group').children('.btn-danger').should('contain','Red').click()
  })

  it("EQ", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('[type="button"]').eq(2).should('contain','Orange').click()
    cy.wait(tiempo)
    cy.get('[type="button"]').eq(4).should('contain','All').click()
  })

  it("FILTER", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('[type="button"]').filter('.btn-warning').should('contain','Orange').click()
    cy.wait(tiempo)
    cy.get('[type="button"]').filter('.btn-success').should('contain','Green').click()
  })

  it("FIND", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('.btn-group').find('.btn-danger').should('contain','Red').click()
    cy.wait(tiempo)
    cy.get('.btn-group').contains('Orange').should('contain','Orange').click()
  })

  it("FIRST y LAST", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('.btn-group').find('button').first().click()
    cy.wait(tiempo)
    cy.get('.btn-group').find('button').last().click()
  })

  it("NEXTALL", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('[type="button"]').should('contain','Green')
    cy.wait(tiempo)
    cy.get('[type="button"]').should('contain','Green').nextAll().should('have.length',4)
  })

  it("PARENT", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('[type="button"]').parent().should('have.class','btn-group')
  })

  it("Reto de las Tablas", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)

    cy.get('.btn-success').should('be.visible').click()
    cy.get('[type="checkbox"]').check({force:true})
    cy.wait(tiempo)

    cy.get('.btn-warning').should('be.visible').click()
    cy.get('[type="checkbox"]').check({force:true})
    cy.wait(tiempo)

    cy.get('.btn-danger').should('be.visible').click()
    cy.get('[type="checkbox"]').check({force:true})
    cy.wait(tiempo)

    cy.get('.btn-default').should('be.visible').click()
    cy.get('[type="checkbox"]').check({force:true})
  })

  it("Reto de las Tablas con For", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(tiempo)
    
    for (let i=1; i<=4; i++){
      let nombreBoton=""
      switch(i){
        case 1:
          nombreBoton="Green"
          break
        case 2:
          nombreBoton="Orange"
          break
        case 3:
          nombreBoton="Red"
          break
        case 4:
          nombreBoton="All"
          break
      }
      cy.get('[type="button"]').eq(i).should('contain',nombreBoton).click()
      cy.get('[type="checkbox"]').check({force:true})
      cy.wait(tiempo)
    }    
  })

  it("Reto 2", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(tiempo)

    const datos=[]

    cy.get('.odd td, .even td').each(($el, index, $list) => {
      datos[index]=$el.text()
    }).then(() =>{
      for(let i=0; i<=datos.length; i++){
        cy.log(datos[i])
      }
    })
  })

  it("Reto 2 sumando valores", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(tiempo)

    const datos=[]
    let cantidad=0

    cy.get('.odd td, .even td').each(($el, index, $list) => {
      datos[index]=$el.text()
    }).then(() =>{
      for(let i=0; i<=datos.length; i++){        
        if(Number(datos[i])){
          cantidad+=Number(datos[i])
        }
      }
      cy.log("La cantidad total es "+cantidad)
      expect(cantidad).eq(394)
    })
  })

  it.only("Reto 2 valor de un campo en especifico", () =>{
    let tiempo=1000
    cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(tiempo)

    const datos=[]

    cy.get('.odd td, .even td').each(($el, index, $list) => {
      datos[index]=$el.text()
    }).then(() =>{
      for(let i=0; i<=datos.length; i++){
        if(datos[i]=="Javascript Developer"){
          cy.log("La edad de "+datos[i-1]+" que es "+datos[i]+" es de "+datos[i+2]+" años")
        }
      }      
    })
  })
  
})