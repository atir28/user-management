describe('Remove user', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should remove a user', () => {
        cy.get(':nth-child(3) > .justify-center > .flex > #open_delete_modal > .bi').click();
        cy.get('#user_details').should('contain', 'Roger'); 
        cy.get('#confirm_btn').click();
        
    })
});
