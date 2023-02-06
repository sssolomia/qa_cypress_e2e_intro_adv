const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username} = generateUser()

    cy.get(':nth-child(3) > .nav-link')
      .should('contain.text', 'Sign up')
      .click();
    
    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);
    
    cy.get('[placeholder="Password"]')
      .type(password);

    cy.get('.btn')
      .should('contain.text', 'Sign up')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', username);
  });
});
