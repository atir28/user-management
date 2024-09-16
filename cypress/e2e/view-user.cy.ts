describe('View existing user ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should display user details', () => {
        cy.get('tbody tr')
            .first()
            .within(() => {
                cy.get('td')
                    .eq(1)
                    .click();
            });
        cy.url().should('include', 'http://localhost:4200/user/details/0');
        cy.get('.card-actions > .btn', { timeout: 200000 }).should('be.visible').click();
        cy.url().should('include', 'http://localhost:4200/user');
    });
});
