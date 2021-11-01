/// <reference types="cypress" />

describe('To Do List New Item', () => {
  it('creating a new todo item', () => {
    cy.visit('/')

    cy.get('.textBar').type('Pick up dry cleaning')

    cy.get('.addButton').click()
  })
})

describe('To Do List Delete Item', () => {
  it('deleting an item', () => {
    cy.get('.listItemBlock').should('contain','Pick up dry cleaning');

    cy.get('.deleteButton').click()

    cy.get('.toDoList').should('contain', '');
  })
})

describe('Creating multiple items and deleting', () => {
  const mockToDoItems = ['Pick up dry cleaning', 'Complete MBO', 'Sync with Manager', 'Complete onboarding'];

  it('creating new todo items', () => {
    mockToDoItems.forEach((item) => {
      cy.get('.textBar').type(item)
      cy.get('.addButton').click()
    })
  })

  it('deleting all todo items', () => {
    cy.get('.deleteButton').each((item) => {cy.wrap(item).click({ multiple: true })})
  })

})

