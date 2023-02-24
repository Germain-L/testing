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
    it('Recherche pour savoir si la navbar est détectée', () => {
        // Attente de 10 Secondes le temps que l'utilisateur fasse le captcha
        cy.wait(10000)
        // Vérification si le bouton de recherche existe
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
    });

    it('Utilisation de la barre de recherche pour trouver une personne', () => {
        // Vérification si le bouton de recherche existe
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
        // Rechercher les élements dans la barre de navigation
        cy.get('.search-global-typeahead__collapsed-search-button-text').type('Adrien BOUTHET')
        // Recherche de "Voir tous les résultats" et click sur le texte
        cy.contains("Voir tous les résultats").click({ force: true });
    });

    it('Utilisation de la barre de recherche pour trouver une entreprise, avec la recherche ', () => {

        cy.visit("https://www.linkedin.com/feed/")
        cy.get('.search-global-typeahead__collapsed-search-button-text').should("exist")
        cy.get('.search-global-typeahead__collapsed-search-button-text').type('EPSI')
        cy.contains("Voir tous les résultats").click({ force: true });
        cy.get('.search-reusables__filter-list > :nth-child(2) > .artdeco-pill').should("exist").click({ force: true })
    });

});