describe('Update existing user ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should update Roger Melet to Captain America', () => {
        cy.get(':nth-child(3) > .justify-center > .flex > #open_update_modal > .bi').click();
        cy.get('#update_modal h3').should('have.text', 'Update user');
        cy.get('#update_modal form div #first_name').clear().type('Captain');
        cy.get('#update_modal form div #last_name').clear().type('Amercia');
        cy.get('#update_modal form div #username').clear().type('amicancaptain');
        cy.get('#update_modal form div #departments').select('Marketing');
        cy.get('#update_modal > .modal-box > .grid > div.flex > .w-6').uncheck();
        cy.get('#update_modal .modal-box .modal-action form #btn_update').click();
    });
});
