/// <reference types='cypress'/>

describe('Api consulta GET', () =>{
    let datos
    it('Test Api Get',() =>{        
        datos=cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal",200)
    })
    
    it('Test Api Get 2',() =>{        
        datos=cy.request("http://localhost:3000/posts").should((response) => {
            expect(response.status).to.eq(200)
        })
    })
})