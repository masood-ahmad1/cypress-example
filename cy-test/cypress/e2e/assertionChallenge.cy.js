///<reference types="cypress"/>
describe("Test", () => {
  it("Launch browser", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.wait(5000);
  });
});
