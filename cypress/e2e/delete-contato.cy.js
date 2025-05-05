/// <reference types="cypress" />

describe('Testes de delete de contatos da agenda de contatos', () => {
    it('Testa a remoção de um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')

        cy.get('.contato').then((contatos) => {
            const tamanhoContatos = contatos.length
            cy.get('.delete').first().click()
            cy.get('.contato').should('have.length', tamanhoContatos - 1)
        })
    })
})
