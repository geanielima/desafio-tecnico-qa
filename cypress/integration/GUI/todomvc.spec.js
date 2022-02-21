/// <reference types="cypress" />

const randomWord = cy.faker.lorem.words();

describe("Testing todo-list", () => {
  before(() => {
    cy.visit("/");
  });
  it("Add items to the list", () => {
    for (let i = 0; i < 4; i++) {
      cy.get(".new-todo")
        .should("be.visible")
        .type(`${i + 1} - ${randomWord}{enter}`);
    }
  });

  it("Delete items from list", () => {
    for (let i = 0; i < 2; i++) {
      cy.get(".destroy").invoke("show").first().click();
    }
  });

  it("Marks 1 item as complete", () => {
    cy.get(".toggle").first().check().should("be.checked");
  });

  it("Select the 'Active' filter", () => {
    cy.contains("a", "Active")
      .should("be.visible")
      .and("have.text", "Active")
      .click();
  });

  it("Select the 'Completed' filter", () => {
    cy.contains("a", "Completed")
      .should("be.visible")
      .and("have.text", "Completed")
      .click();
  });

  it("With the 'All' filter active, click on 'Clear completed'", () => {
    cy.contains("a", "All")
      .should("be.visible")
      .and("have.text", "All")
      .click();
    cy.get(".clear-completed")
      .should("be.visible")
      .and("have.text", "Clear completed")
      .click();
  });
});
