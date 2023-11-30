describe("API automation tests",function(){ 

    it("demo api test for Get API",function(){ 
    cy.request({ 
    method: 'GET', 
    url: `https://randomuser.me/api/`, 
    headers: { 
    'content-type': 'application/json', 
    }, 
    }).then((response) => { 
    // cy.log(JSON.stringify(response)); 
    const res1 = JSON.stringify(response.body); 
    cy.log(response.body.results[0].gender) 
    let apiToken = response.body.results[0].apitoken
    cy.log(res); 
    cy.request({ 
        method: 'GET', 
        url: `https://randomuser.me/api/`, 
        headers: { 
        'content-type': 'application/json', 
        'apiToken' : apiToken
        }, 
        }).then((response) => { 
        // cy.log(JSON.stringify(response)); 
        const res1 = JSON.stringify(response.body); 
        cy.log(response.body.results[0].apitoken)
       
        cy.log(res); 
        })
    }); 
})

    it("Booking POST Request",function(){ 
        cy.request({ 
        method:'POST', 
        url : `https://restful-booker.herokuapp.com/booking`, 
        header: { 
        'content-type': 'application/json', 
        }, 
        body:{ 
        firstname : "jim", 
        lastname : "Brown", 
        totalprice : "111", 
        depositpaid : true, 
        bookingdates : { 
        checkin : "2018-01-01", 
        checkout : "2019-01-01" 
        }, 
        additionalneeds : "breakfast" 
        }, 
        }).then((response) => { 
        const finalString = JSON.stringify(response.body); 
        cy.log( `${finalString} This is example string`)
        cy.log(response.status) 
        expect(response.status).to.eq(200); 
        cy.log(response.body.bookingid)
        }); 
        })  
         
        it("calling a API using commands", function(){ 
        cy.apiLogin() 
        } 
        ) 

        it.only("Demoblaze Login", function(){
            cy.visit('https://www.demoblaze.com/')

            cy.get('.list-group-item').first().should('have.text','CATEGORIES');
            cy.get('#login2').click()
            // cy.wait(2000)
            cy.get('input[id="loginusername"]').type('Athri')

            
            cy.get('.list-group-item').eq(1).click()
            cy.xpath("//a[contains(text(),'Phones')]").click()
            cy.xpath("//a[@id='login2']").click()
            
            cy.get('a').contains('Sign up').click({force:true})
            cy.wait(2000)
        })
}) 



// api1 --> accesstoken --> API2