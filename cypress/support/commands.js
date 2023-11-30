// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiLogin',apiLogin); 
function apiLogin() { 
cy.request({ 
method: 'POST', 
url: 'https://restful-booker.herokuapp.com/auth', 
header:{ 
'content-type': 'application/json', 
}, 
body: { 
username: "admin", 
password: "password123" 
}, 
}).then((response1) => { 
expect(response1.status).to.eq(200); 
const finalString = JSON.stringify(response1.body.id_token) 
cy.log(response1.body.token) 
}) 
} 

// Delete API
// Cypress Command try it in your test.