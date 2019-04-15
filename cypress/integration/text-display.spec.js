describe('Text Display For Application', function() {
    it('shows empty on render', function() {
        cy.visit('http://localhost:3000')
        cy.get('#text-display').should('be.empty')
    })
    
    it('shows name of added friends', function() {
        cy.get('#input').type('abc')
        cy.get('#input').should('have.value', 'abc')
        cy.get('#button').click()
        cy.get('#text-display').contains('abc')
    })
})
