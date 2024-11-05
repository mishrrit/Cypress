
describe('Basic Page Interactions',() => {
    beforeEach (()=>{
        cy.visit('/example-4');
    });

    it('sets the header text to the item\'s name when double clicked',() => {
        cy.get('[data-cy = box-1-items-list] > :nth-child(2)')
        .dblclick();

        cy.get('[data-cy = box-1-selected-name')
        .invoke('text')
        .should('equal','Option Two');
                
    })

    it('displays the correct count for the number of selected checkboxes',()=> {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(2) input')
        .check();

        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal','2');

    })

    it('displays the name of the currently selected item in the dropdown',()=> {
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Two');
        
        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal','Option Two');
    })

    it('should displays the name of the most recently hovered over item in the list',()=> {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover');
            /**
             * Prints the current state of the Cypress test to the console for debugging purposes.
             */
           // .debug();
            

        cy.get('[data-cy=box-4-selected-name')
            .invoke('text')
            .should('equal','Option Two');
    })
    
})