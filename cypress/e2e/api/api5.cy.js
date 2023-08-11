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

    it('Test Api Get metodo 2',() =>{        
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response => {
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[0]).has.property("title","Cypress")
            expect(body[0]).has.property("author","Ricardo")
        })
    })

    it('Test Api POST',() =>{        
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": 3,
                "title": "Java",
                "author": "Solo"
            }
        }).then(response => {            
            expect(response.status).to.eql(201)
        })
    })

    it('Test Api POST reto multiples valores',() =>{        
        for(let n=1;n<=10;n++){
            let tx=Math.random().toString(10)
            let tx2=Math.random().toString(10)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body:{
                    "id": 3+n,
                    "title": tx,
                    "author": tx2
                }
            }).then(response => {            
                expect(response.status).to.eql(201)
            })
        }
    })

    it('Test Api PUT',() =>{        
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/3",
            body:{
                "id": 3,
                "title": "Java modificado desde cypress en la api",
                "author": "Solo"
            }
        }).then(response => {            
            expect(response.status).to.eql(200)
        })
    })

    it('Test Api DELETE',() =>{        
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/12",            
        }).then(response => {            
            expect(response.status).to.eql(200)
        })
    })

    it.only('Test Api DELETE varios campos',() =>{        
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/12",            
        }).then(response => {            
            expect(response.status).to.eql(200)
        })
    })
})