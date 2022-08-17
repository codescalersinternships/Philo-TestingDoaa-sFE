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
    cy.get("#inputID").type("88");
    cy.get("#inputTask").type("philo's test");
    cy.get('[type="create"]').click();
  });
  it("create item-no content", () => {
    cy.get("#inputID").type("89");
    cy.get('[type="create"]').click();
  });
  it("create item-no ID", () => {
    cy.get("#inputTask").type("philo's test II");
    cy.get('[type="create"]').click();
  });
  it("create item-arabic content", () => {
    cy.get("#inputID").type("90");
    cy.get("#inputTask").type("فيلوز تست");
    cy.get('[type="create"]').click();
  });
  it("create item-pre-existing ID", () => {
    cy.get("#inputID").type("88");
    cy.get("#inputTask").type("new Philo's test");
    cy.get('[type="create"]').click();
  });

  it("create item string in ID box", () => {
    cy.get("#inputID").type("sdfsdfsd");
    cy.get("#inputTask").type("new Philo's test");
    cy.get('[type="create"]').click();
  });
  //this next test is the way it is as sometimes requests fail when text is entered in a JSON object format,
  //this is trying to make it fail, I am not trying to enter an actual JSON object
  // its like when entering an SQL query into a password texrbox to make it fail
  it("create item-JSON as text", () => {
    cy.get("#inputID").type("93");
    cy.get("#inputTask").type('{ID:15, task:"JSON example"}');
    cy.get('[type="create"]').click();
  });

  it("delete using X", () => {
    cy.get(":nth-child(4) > .btn > i").click();
  });
  it("delete using delete button", () => {
    cy.get("#inputID").type("9");
    cy.get('[type="delete"]').click();
  });

  it("update item content", () => {
    cy.get("#inputID").type("91");
    cy.get("#inputTask").type("updated");
    cy.get('[type="update"]').click();
  });

  it("get item by ID", () => {
    cy.get("#inputID").type("1234");
    cy.get('[type="get"]').click();
  });

  it("get item by non-existent ID", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("404");
      return false;
    });
    cy.get("#inputID").type("9000");
    cy.get('[type="get"]').click();
  });
});

//   //open target page
//   it("sign up", () => {
//     cy.visit("https://www.way2automation.com/");
//     //cy.visit("https://sso.teachable.com/secure/673/identity/login");
//     cy.get("li[id='menu-item-27625'] span[class='menu-text']").click();

//     cy.get(".heading3").contains("Log in");
//     cy.get("a[href='/secure/673/identity/sign_up']").click();

//     cy.get(".container.m-auto-xs.col-4-l.col-5-m.col-10-xs.p-h-6-l")
//       .find(".heading3.text-center-xs.m-b-0-xs.m-b-4-m")
//       .contains("Sign Up");
//     cy.get(".container.m-auto-xs.col-4-l.col-5-m.col-10-xs.p-h-6-l")
//       .find("#user_name")
//       .type("TestCypress");

//     cy.get("#user_email").type("mail@email.com");

//     cy.get("#password").type("Password");

//     cy.get(":nth-child(6) > .dsp-flex-xs").find(".m-l-0-xs").click();

//     cy.get('[data-testid="signup-button"]').click();
//   });
// });
