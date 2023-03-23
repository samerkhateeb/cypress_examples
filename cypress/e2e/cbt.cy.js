// <reference types="Cypress" />

// const { beforeEach } = require("mocha");
context("Window", () => {
  beforeEach(() => {
    cy.visit("https://plexplus.net");
  });

  it("open in macbook 15", () => {
    cy.viewport("macbook-15");
    cy.screenshot();
    cy.wait(200);
  });

  it("open in macbook 13", () => {
    cy.viewport("macbook-13");
    cy.screenshot();
    cy.wait(200);
  });

  it("cy.viewport('iphone-5')", () => {
    cy.viewport("iphone-5");
    cy.screenshot();
    cy.wait(200);
  });

  it("open in ipad-2", () => {
    cy.viewport("ipad-2");
    cy.screenshot();
    cy.wait(200);
  });

  //   beforeEach(() => {
  //     cy.visit("https://example.cypress.io/commands/window");
  //   });

  //   it("cy.window - get the global window object", () => {
  //     // https://on.cypress.io/window
  //     cy.window().should("have.property", "top");
  //   });

  //   it("cy.document() - get the document object", () => {
  //     //https://on.cypress.io/document
  //     cy.document().should("have.property", "charset").and("eq", "UTF-8");
  //   });

  //   it("cy.title() - get the title", () => {
  //     // https://on.cypress.io/title
  //     cy.title().should("include", "Kitchen Sink");
  //   });
});
