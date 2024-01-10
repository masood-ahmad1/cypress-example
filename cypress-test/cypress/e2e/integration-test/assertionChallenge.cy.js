///<reference types="cypress"/>
describe("Test", () => {
  it("Launch browser", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.log(cy.title());
    cy.title().should("include", "WebDriver | Contact Us");
    // cy.get('[name="first_name"]').type("masood");
    // cy.get('[name="last_name"]').type("ahmad");
    // cy.get('[name="email"]').type("mas@thromail.com");
    // cy.get("textarea.feedback-input").type("assertion excercise");
    // cy.get('[type="submit"]').click();
    // cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
