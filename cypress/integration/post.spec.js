describe('Post', () => {
    beforeEach(() => {
        cy.logar('teste@teste.com','12345678')
    })

    it('Novo', () => {
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type('Cypress e2e')
        cy.get('[formcontrolname=description]').type('Ponta a ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains('Cypress e2e')
        
    })

    it('Editar', () => {
        cy.contains('teste').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[formcontrolname=body]').clear()
        cy.get('[formcontrolname=body]').type('Economia')
        cy.contains('Publish Article').click()
        cy.get('h1').contains('Economia')
        
    })
})