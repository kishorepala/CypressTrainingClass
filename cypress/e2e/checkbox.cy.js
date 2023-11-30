describe("Validation of Check boxes",function(){ 

    it.only("Select a checkbox",function(){ 
        
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get('#vfb-7-1').not('[disabled]').check('Option 1').should('be.checked')
        cy.get('#vfb-7-2').check('Option 2').should('be.checked')
        cy.get('#vfb-7-3').check('Option 3')
        
        cy.get('#vfb-6-0').not('[disabled]').check().should('be.checked')
        cy.get('#vfb-6-0').not('[disabled]').uncheck().should('not.be.checked')
        cy.get('#vfb-6-1').check()
        cy.get('#vfb-6-2').check()
        cy.get('#vfb-6-2').uncheck({force:true})

    })
    
})