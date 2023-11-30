describe('Tests for Login cases', () => {
    
    beforeEach (() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://www.demoblaze.com/index.html');
    });

    after(()=>{
        cy.get('.active > .nav-link').click({force:true})
    })
  
    it('S1 Click on Sign Up', () => {
        //tag: regression
        cy.get('#signin2111').click()
      
    });
  
    it('S2 Sign Up with a username and password', () => {
        //tag: regression
        //tag: smoke
        cy.get('#signin2').click()
        cy.wait(3000)
        cy.get('#sign-username').type('Tester',{ force: true })
        cy.wait(3000)
        cy.get('#sign-password').type('Test@123',{ force: true })
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    });
  
    it('S3 Login', () => {
        //tag: smoke
        cy.get('#login2').click();
        cy.get('#loginusername').type('TesterAuto123',{ force: true })
        cy.get('#loginpassword').type('Test@123',{ force: true })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
    });

  });
  
  //before, beforeEach,After,AfterEach
  //before after --> 
  //regression,smoke,sanity
  //50 - 20 regression, 10 smoke, 20 sanity