//docs.cypress.io/api/commands/fixture.html#Arguments

import "cypress-file-upload";
const fileName = "example.json";
describe("Fil;e Upload test", function () {
  it("upload file", function () {
    cy.viewport("macbook-15");
    const filePath = "wpx.png";
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile(filePath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("wpx.png");
  });
});
