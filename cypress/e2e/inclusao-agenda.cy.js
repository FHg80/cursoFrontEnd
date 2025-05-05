/// <reference types="cypress" />

describe('Testes de inclusão da agenda de contatos', () => {
    it('Cadastra novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato').then((contatosAntes) => {
            const tamanhoAntes = contatosAntes.length

            cy.get('input[type="text"]').type('Hélio')
            cy.get('input[type="email"]').type('helio.ernesto@teste.com')
            cy.get('input[type="tel"]').type('3112345678')
            cy.get('.adicionar').click()

            cy.get('.contato').should('have.length', tamanhoAntes + 1)
        })
    })
})
