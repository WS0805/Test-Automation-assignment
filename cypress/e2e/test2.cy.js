describe('Login Test - the-internet.herokuapp.com', () => {

    beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/login')
  })

  it('Login success', () => {

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  })

  it('Login failed - Password incorrect', () => {

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('Password!')
    cy.get('button[type="submit"]').click()

    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  })

  it('Login failed - Username not found', () => {

    cy.get('#username').type('tomholland')
    cy.get('#password').type('Password!')
    cy.get('button[type="submit"]').click()

    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  })

})
