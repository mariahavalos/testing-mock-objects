describe('Open Application', function() {
    it('App renders', function() {
        cy.visit('http://localhost:3000')
        cy.get('.App')
    })
})

