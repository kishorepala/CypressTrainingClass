class HeaderLinks {
    gethomeLink(){
        return cy.get('a').contains('Home ')
    }

    getcontactLink(){
        return cy.get('a').contains('Contact')  
    }

    getaboutUsLink(){
        return cy.get('a').contains('About us')  
    }

    getloginLink(){
        return cy.get('#login2')
    }

    getloginUserName(){
        return cy.get('#loginusername')
    }

    getloginPassword(){
        return cy.get('#loginpassword')
    }
}
export default new HeaderLinks();