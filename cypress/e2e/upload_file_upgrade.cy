//docs.cypress.io/api/commands/fixture.html#Arguments

import "cypress-file-upload";
const fileName = "example.json";
describe("Fil;e Upload test", function () {
  it("upload file", function () {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.viewport("macbook-15");
    cy.get("#file-upload").atttachFile(filePath);

    cy.fixture(fileName).then((fileContent) => {
      cy.get("#file-upload").upload({
        fileContent,
        fileName,
        mimeType: "application/json",
      });
    });
    cy.get("#file-submit").click();
    cy.get("#uploaded-files")
      .invoke("text")
      .then((text) => {
        expect(text - trim()).equal("example.json");
      });
  });
});
