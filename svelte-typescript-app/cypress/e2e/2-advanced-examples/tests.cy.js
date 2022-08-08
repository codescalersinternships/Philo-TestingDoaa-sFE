   /// <reference types="cypress"/>
it('it should be able to add a new todo to the list',()=>{
    cy.visit('http://localhost:3001/')
    cy.get('body')

    cy.get('.svelte-1sqeder')
    cy.contains("TODO")

    cy.get('[type="submit"]')
    cy.contains("Submit")

    cy.get('#inputID').type("100")

    cy.get('#inputTask').type("amiraa")
    cy.get('[type="submit"]')
    .click()

    cy.get(':nth-child(5) > .btn > i')
    .click()
   //cy.get('input[type="checkbox"]').check()
    cy.get('#inputID').type('1').should('have.value','1')
    .get('#inputTask').type('task1').should('have.value','task1')
   
  })

