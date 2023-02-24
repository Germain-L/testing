/// <reference types="cypress" />

describe('Simulation d\'un parcour utilisateur sur linkedin', () => {

    it('Navigation sur le lien linkedin', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                            return false;
                        })
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.linkedin.com/');

    });

    it('Vérification du bouton mot de passe oublié', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                            return false;
                        })
        cy.contains('Forgot password?').click({force: true});
    });

    it('Vérification du champs Email/Phone et des boutons Reset Password et Back', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.get('#username').should('exist');
        cy.get('#reset-password-submit-button').should('exist');
        cy.get('#back-button-password-reset').should('exist');
    });

    it('Test click bouton Back', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.get('#back-button-password-reset').click({force: true});
    });

    it('Vérification de la présence du champ mail et mot de passe, puis du bouton connexion', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.get('input[type=text]').should('exist');
        cy.get('input[type=password]').should('exist');
        cy.contains('Sign in').should('exist');
    });

    it('Connexion de l\'utilisateur', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.get('input[type=text]').type('gejevod102@wwgoc.com');
        cy.get('input[type=password]').type('Password');
        cy.contains('Sign in').click({force: true});
    });

});
