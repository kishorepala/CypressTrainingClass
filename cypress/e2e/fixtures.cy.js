describe('Tests for Login cases', () => {
    
   let data;  // Use a let declaration

beforeEach(() => {
   
  cy.fixture('example.json').then((jsonData) => {
    data = jsonData;  
    cy.visit(data.baseUrl);
  });
});

afterEach(() =>{
   cy.get('#logout2').click()
})


it('S3 Login', () => {
  
  cy.get('#login2').click();
  cy.wait(3000);
  cy.get('#loginusername').type(data.username);  // Access data using the variable
  cy.wait(3000);
  cy.get('#loginpassword').type(data.password);
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  cy.wait(3000);
});

})