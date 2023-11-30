describe('Dropdown techniques', () => {
 
 beforeEach(() => {

     cy.visit('https://codenboxautomationlab.com/practice/');
   
 });
 
 
 it('Static Dropdown', () => {
  cy.wait(5000)
  cy.get('#dropdown-class-example').select('Selenium')
  cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
  cy.get('#dropdown-class-example').select(3).should('have.value','option3')
 })

 it.only('Dynamic Dropdown', () => {
  
  cy.get('#autocomplete').type('Sri')
  cy.get('.ui-menu-item').contains('Sri Lanka').click()
  cy.get('#autocomplete').clear()
  cy.get('#autocomplete').type('India')
  cy.get('.ui-menu-item').eq(1).contains('India').click()
  
  
 })
}) 