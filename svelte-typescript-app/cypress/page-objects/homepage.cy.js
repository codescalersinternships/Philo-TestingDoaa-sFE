class HomePage {
  get getCreateBtn() {
    return cy.get('[type="create"]');
  }

  get getUpdateBtn() {
    return cy.get('[type="update"]');
  }

  get getDeleteBtn() {
    return cy.get('[type="delete"]');
  }

  get getDelete4thBtn() {
    return cy.get(":nth-child(4) > .btn > i");
  }

  get getGetIDBtn() {
    return cy.get('[type="get"]');
  }
  get getIDTextBox() {
    return cy.get("#inputID");
  }
  get getContentTextBox() {
    return cy.get("#inputTask");
  }
}

export default new HomePage();
