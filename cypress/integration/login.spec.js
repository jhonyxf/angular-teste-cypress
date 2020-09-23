describe('Conduit Login', () => {
    it('Login sucesso', () => {
      cy.login('teste@teste.com', '12345678')
      cy.get('.nav-item:nth-child(4) > .nav-link').click()
      cy.get('.btn:nth-child(5)').click()
      cy.url().should('contain', '/settings')
    })
    it('Dados invalidos', () => {
        cy.login('emailerrado@teste.com', '12345678')
        cy.get('.error-messages > li')
          .should('contain', 'email or password is invalid')
      })
  })