define('Profile', () =>{

    it('Editar Perfil', () => {
        cy.logar('teste@teste.com', '12345678')
        cy.contains('teste').click()
        cy.contains('Edit Profile Settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
            .type('https://thispersondoesnotexist.com/image')
        cy.get('[formcontrolname="password"]').type('12345678')
        cy.contains('Update Settings').click()
    })

})