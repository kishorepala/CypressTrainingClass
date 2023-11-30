

import HeaderLinks from '../support/PageObjects/headerLinks.js'

describe("API automation tests",function(){ 

    it("demo api test for Get API",function(){ 
        cy.visit('https://www.demoblaze.com/')
        HeaderLinks.getloginLink().click()
        // HeaderLinks.getloginLink().click()
        HeaderLinks.getloginUserName().type('UserName')
        cy.wait(2000)
        HeaderLinks.getloginPassword().type('Password')
    })
})