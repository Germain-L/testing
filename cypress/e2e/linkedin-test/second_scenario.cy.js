/// <reference types="cypress" />
describe('Simulation d\'un nouveau post sur linkedin', () => {

    it('Se connecter à linkedin', () => {
        
            cy.clearAllCookies();
            cy.clearLocalStorage();
            cy.visit('https://www.linkedin.com/');
        
        
            cy.get('#session_key').type('gejevod102@wwgoc.com');
            cy.get('#session_password').type('Password');
            cy.get('.sign-in-form__submit-button').click({force: true});
    });
        
});
