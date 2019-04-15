describe('Input for Application', function() {
    it('has input that is not disabled on render', function() {
        cy.visit('http://localhost:3000')
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
    })

    it('has button that is not disabled on render', function() {
        cy.get('#button').click()
    })

    it('has button that is disabled after 5 friends', function() {
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
        cy.get('#button').click()
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
        cy.get('#button').click()
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
        cy.get('#button').click()
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
        cy.get('#button').click()
        cy.get('#input').should('be.disabled')
        cy.get('#button').should('be.disabled')
    })
})
