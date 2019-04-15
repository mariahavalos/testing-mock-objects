describe('Progress Bar For Application', function() {
    it('should exist', function() {
        cy.visit('http://localhost:3000')
        cy.get('#progress-bar').should('be.visible')
    })
})
