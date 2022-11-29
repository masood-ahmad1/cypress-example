describe('To Test the benchmark of lighthouse-Performance', () => {
    it('Check benchmark of performance', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('./report.html');
      cy.get('.lh-scores-header > [href="#performance"] > .lh-gauge__percentage')
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', 60);
    });
  });
  
  describe('To Test the benchmark of lighthouse-Accessibility', () => {
    it('Check benchmark of accessibility', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('./report.html');
      cy.get('.lh-scores-header > [href="#accessibility"] > .lh-gauge__percentage')
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', 60);
    });
  });
  describe('To Test the benchmark of lighthouse-Best Practices', () => {
    it('Check benchmark of best-pratices', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('./report.html');
      cy.get('.lh-scores-header > [href="#best-practices"] > .lh-gauge__percentage')
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', 60);
    });
  });
  describe('To Test the benchmark of lighthouse-SEO', () => {
    it('Check benchmark of seo', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('./report.html');
      cy.get('.lh-scores-header > [href="#seo"] > .lh-gauge__percentage')
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', 60);
    });
  });
  