describe('text box with max characte', () => {
  it('should not accept more than 10 characters', () => {
    cy.visit('http://localhost:3000/example-3');

    cy.get('span')
        .eq(1)
        .invoke('text')
        .should('equal', '15');
    
    cy.get('input').eq(1).type('hello');

    cy.get('span')
        .eq(1)
        .invoke('text')
        .should('equal', '10');

    cy.get('input').eq(1).type(' my friend');

    cy.get('span')
        .eq(1)
        .invoke('text')
        .should('equal', '0');

  });

  it('should not accept more than 15 characters', () => {
    cy.visit('http://localhost:3000/example-3'); 

    cy.get('input').eq(1).type('abcdefghijklmnopqrstuvwxyz');

    cy.get('input')
      .eq(1)
      .should('have.attr', 'value','abcdefghijklmno');

  });

});

