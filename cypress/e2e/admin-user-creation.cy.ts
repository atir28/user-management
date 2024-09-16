describe('Admin user creation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });
    it('should create an admin user', () => {
        cy.get('.justify-between > :nth-child(1) > .btn').click();
        cy.get('#create_modal > .modal-box > .grid > :nth-child(1) > #first_name').type('Cristiano');
        cy.get('#create_modal > .modal-box > .grid > :nth-child(2) > #last_name').type('Ronaldo');
        cy.get('#create_modal > .modal-box > .grid > :nth-child(3) > #username').type('cr7cristiano');
        cy.get('#create_modal > .modal-box > .grid > :nth-child(4) > #department').select('Management');
        cy.get('#create_modal > .modal-box > .grid > :nth-child(5) > #isAdmin').check();
        cy.get('#create_modal > .modal-box > .modal-action > .flex > .btn-primary').click();
    });
});
