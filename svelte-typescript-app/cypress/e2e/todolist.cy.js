import homepage from "../page-objects/homepage.cy.js";
/// <reference types="cypress"/>

describe("Doaa", function () {
  //open target page
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });
  it("navigate to todolist App", () => {});

  it("check title", () => {
    cy.get(".svelte-1sqeder").find("h2.svelte-ke1wqu").contains("TODO");
  });

  it("create item-normal", () => {
    homepage.getIDTextBox.type("88");
    homepage.getContentTextBox.type("philo's test");
    homepage.getCreateBtn.click();
  });
  it("create item-no content", () => {
    homepage.getIDTextBox.type("89");
    homepage.getCreateBtn.click();
  });
  it("create item-no ID", () => {
    homepage.getContentTextBox.type("philo's test II");
    homepage.getCreateBtn.click();
  });
  it("create item-arabic content", () => {
    homepage.getIDTextBox.type("90");
    homepage.getContentTextBox.type("فيلوز تست");
    homepage.getCreateBtn.click();
  });
  it("create item-pre-existing ID", () => {
    homepage.getIDTextBox.type("88");
    homepage.getContentTextBox.type("new Philo's test");
    homepage.getCreateBtn.click();
  });

  it("create item string in ID box", () => {
    homepage.getIDTextBox.type("sdfsdfsd");
    homepage.getContentTextBox.type("new Philo's test");
    homepage.getCreateBtn.click();
  });
  //this next test is the way it is as sometimes requests fail when text is entered in a JSON object format,
  //this is trying to make it fail, I am not trying to enter an actual JSON object
  //its like when entering an SQL query into a password texrbox to make it fail
  it("create item-JSON as text", () => {
    homepage.getIDTextBox.type("93");
    homepage.getContentTextBox.type('{ID:15, task:"JSON example"}');
    homepage.getCreateBtn.click();
  });

  it("delete using X", () => {
    homepage.getDelete4thBtn.click();
  });
  it("delete using delete button", () => {
    homepage.getIDTextBox.type("9");
    homepage.getDeleteBtn.click();
  });

  it("update item content", () => {
    homepage.getIDTextBox.type("91");
    homepage.getContentTextBox.type("updated");
    homepage.getUpdateBtn.click();
  });

  it("get item by ID", () => {
    homepage.getIDTextBox.type("1234");
    homepage.getGetIDBtn.click();
  });

  it("get item by non-existent ID", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("404");
      return false;
    });
    homepage.getIDTextBox.type("9000");
    homepage.getGetIDBtn.click();
  });
});
