# Cypress Examples

Here some examples on FileUpload and ViewPort design using Cypress.

## Browser View Port Example

```
// <reference types="Cypress" />

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
  
});

```


## File Upload Example
```

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

```


