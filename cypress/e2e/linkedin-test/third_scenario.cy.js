/// <reference types="cypress" />
describe('Simulation d\'un nouveau post sur linkedin', () => {

    it('Navigation sur le lien linkedin', () => {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.linkedin.com/');

        cy.get('#session_key').should('exist');
        cy.get('#session_password').should('exist');
        cy.get('.sign-in-form__submit-button').should('exist');

        cy.get('#session_key').type('gejevod102@wwgoc.com');
        cy.get('#session_password').type('Password');
        cy.get('.sign-in-form__submit-button').click({ force: true });

    });

    // Check NavBar
    it('Recherche NavBar Exist', () => {
        cy.wait(10000)
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
    });

    it('Utilisation NavBar Personne', () => {
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
        cy.get('.search-global-typeahead__collapsed-search-button-text').type('Adrien BOUTHET')
        cy.contains("Voir tous les résultats").click({ force: true });
    });

    it('Utilisation NavBar Entreprise', () => {
        cy.visit("https://www.linkedin.com/feed/")
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
        cy.get('.search-global-typeahead__collapsed-search-button-text').type('EPSI')
        cy.contains("Voir tous les résultats").click({ force: true });
        cy.get('.search-reusables__filter-list > :nth-child(2) > .artdeco-pill').should("exist").click({ force: true })
    });

});