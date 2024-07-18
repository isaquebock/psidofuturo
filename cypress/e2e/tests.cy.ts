/**
 * Main Screen
 * Scenario 1 - Details Page
 * As a user, I want to see the details page of a psychologist.
 */

describe('Scenario 1', () => {
  it('Given that the user wants to enter the main screen', () => {
    cy.visit('/')
  })

  it('When he click on "Ver perfil completo"', () => {
    cy.get('[data-testid="b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p"]').click()
  })

  it('Then he should be redirected to the psychologists details page', () => {
    cy.url().should('include', '/psi/b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p');
  })

  after(() => {
    cy.window().then((win) => {
      win.location.href = 'about:blank'
    })
  })
})

/**
 * Details Page
 * Scenario 2 - Schedule an appointment
 * As a user, I want to schedule an appointment.
 */

describe('Scenario 2', () => {
  it('Given that the user wants to schedule an appointment', () => {
    cy.visit('/psi/b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p')
  })

  it('When he select the time and date on the psychologists details page"', () => {
    cy.get('[data-testid="button-0-3"]').click()
  })

  it('And click the "Confirm and schedule" button"', () => {
    cy.get('[data-testid="confirm"').click()
  })
  
  it('Then he should be redirected to the psychologists details page', () => {
    cy.get('[data-testid="confirmed-schedule"').should('be.visible')
  })

  
  after(() => {
    cy.window().then((win) => {
      win.location.href = 'about:blank'
    })
  })
})

/**
 * Details Page
 * Scenario 3 - Leave the details page
 * As a user, I want to schedule an appointment.
 */

describe('Scenario 3', () => {
  it('Given that the user wants to leave the details page', () => {
    cy.visit('/psi/b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p')
  })

  it(' When they click on "Retornar à Lista"', () => {
    cy.get('[data-testid="return"]').click()
  })
  
  it('Then they should be redirected to the main page', () => {
    cy.url().should('include', '/');
  })
})



