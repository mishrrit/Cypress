describe('text box with max characte', () => {
    it('first  text box should not accept more than 15 characters', () => {
      cy.visit('http://localhost:3000/example-3');
  
      cy.get('[data-cy="first-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '15');
      
      cy.get('[data-cy="input-first-name"]')
        .type('hello');
  
      cy.get('[data-cy="first-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '10');
  
      cy.get('[data-cy="input-first-name"]')
        .type('hello I am ritz');
  
      cy.get('[data-cy="first-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '0');
  
    });
  
    it('Second text box should not accept more than 15 characters', () => {
      cy.visit('http://localhost:3000/example-3'); 
  
      cy.get('[data-cy="input-last-name"]')
        .type('abcdefghijklmnopqrstuvwxyz');
  
      cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '0');
  
    });
  
  });
  
  