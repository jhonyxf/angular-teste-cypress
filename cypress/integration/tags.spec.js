describe('Tags', () => {

    it('Adicionar', () => {
        cy.logar('teste@teste.com','12345678')
        cy.contains('teste').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[placeholder="Enter tags"]').type('dungeons{enter}')
        cy.get('[placeholder="Enter tags"]').type('dragons{enter}')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').contains('dragons')
    })
})