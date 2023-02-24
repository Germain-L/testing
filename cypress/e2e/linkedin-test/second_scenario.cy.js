/// <reference types="cypress" />
describe('Simulation d\'un nouveau post sur linkedin', () => {

    it('Connexion sur linkedin', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.linkedin.com/');
    });

    it('Vérification que les champs existe', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                            return false;
                                        })
        cy.get('input[type=text]').should('exist');
        cy.get('input[type=password]').should('exist');
    });

    it('Connexion au compte utilisateur', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                            return false;
                                        })
        cy.get('input[type=text]').type('gejevod102@wwgoc.com');
        cy.get('input[type=password]').type('Password');
        cy.get('button[type=submit]').click({force: true});
    });



    it('Création d\'un nouveau post', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.wait(10000);
        cy.get('#ember26').should('exist');
        cy.get('#ember26').click({ force: true });

        cy.get('.ql-editor').should('exist');
        const randomText = Math.random().toString(36).substring(2); // generate a random string
        cy.get('.ql-editor').type(randomText);

        cy.wait(1000) // wait for 1 second
        cy.contains('Post').click({ force: true })
    });

    it('Suppression du nouveau post', () => {
        cy.on('uncaught:exception', (err, runnable) => {
                                    return false;
                                })
        cy.wait(1000) // wait for 1 second
        cy.get('.artdeco-toast-item__cta').should('exist');
        cy.get('.artdeco-toast-item__cta').click({ force: true });

        cy.wait(1000)
        cy.get('#ember33').should('exist');
        cy.get('#ember33').click({ force: true });

        cy.wait(1000)
        cy.contains('Supprimer le post').click({ force: true })

        cy.get('.feed-components-shared-decision-modal__confirm-button').should('exist');
        cy.get('.feed-components-shared-decision-modal__confirm-button').click({ force: true });
    });
});
