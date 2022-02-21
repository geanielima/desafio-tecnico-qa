/// <reference types="cypress" />

const randomWord = cy.faker.lorem.words();

describe("Testando todo list", () => {
  before(() => {
    cy.visit("/");
  });
  it("Cadastrar itens na lista", () => {
    for (let i = 0; i < 4; i++) {
      cy.get(".new-todo")
        .should("be.visible")
        .type(`${i + 1} - ${randomWord}{enter}`);
    }
  });

  it("Excluir itens da lista", () => {
    for (let i = 0; i < 2; i++) {
      cy.get(".destroy").invoke("show").first().click();
    }
  });

  it("Marcas 1 item como completo", () => {
    cy.get(".toggle").first().check().should("be.checked");
  });

  it("Selecionar o filtro ‘Active’", () => {
    cy.contains("a", "Active").should("be.visible").click();
  });

  it("Selecionar o filtro ‘Completed’", () => {
    cy.contains("a", "Completed").should("be.visible").click();
  });

  it("Estando com o filtro ‘All’ ativo clicar em ‘Clear completed’", () => {
    cy.contains("a", "All").should("be.visible").click();
    cy.get(".clear-completed").should("be.visible").click();
  });
});
