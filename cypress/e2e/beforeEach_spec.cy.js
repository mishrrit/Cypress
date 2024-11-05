describe('text box with max character', () => {
  
  beforeEach(() => {
    cy.visit('/example-3');
  
    cy.get('[data-cy="first-name-chars-left-count"]')
      .as('charsLeftSpan')

      cy.get('[data-cy="input-first-name"]')
      .as('charInput')
  });

    it('first  text box should not accept more than 15 characters', () => {  
      
      cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '15');
      
      cy.get('@charInput')
        .type('hello');
  
      cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '10');
  
      cy.get('@charInput')
        .type('hello I am ritz');
  
      cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '0');
  
    });
  
    it('Second text box should not accept more than 15 characters', () => {
      
      cy.get('[data-cy="input-last-name"]')
        .type('abcdefghijklmnopqrstuvwxyz');
  
      cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '0');
  
    });
  
  });
  
