/// <reference types="cypress" />

describe('Simulation d\'un parcour utilisateur sur linkedin', () => {

    it('Navigation sur le lien linkedin', () => {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.linkedin.com/');
    });

    it('Vérification de la présence du champ mail et mot de passe, puis du bouton connexion', () => {
        cy.get('#session_key').should('exist');
        cy.get('#session_password').should('exist');
        cy.get('.sign-in-form__submit-button').should('exist');
    });

    it('Connexion de l\'utilisateur', () => {
        cy.get('#session_key').type('gejevod102@wwgoc.com');
        cy.get('#session_password').type('Password');
        cy.get('.sign-in-form__submit-button').click({force: true});
    });

});
