describe("Test", () => {
  it("Launch browser", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").click();
  });
});
