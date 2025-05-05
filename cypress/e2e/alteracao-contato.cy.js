/// <reference types="cypress" />

describe('Testes de alteração de contato na agenda de contatos', () => {
    it('Altera contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Hélio')
        cy.get('input[type="email"]').clear().type('helio.ernesto@teste.com')
        cy.get('input[type="tel"]').clear().type('3112345678')
        cy.get('.alterar').click()

        cy.get('.contato li').first().should('contain', 'Hélio')
    })
})