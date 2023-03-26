describe("initial page", () => {
  it("sucessfully load", () => {
    cy.visit("http://localhost:3000");
  });
});
describe(" Product page", () => {
  it("sucessfully load", () => {
    cy.visit("http://localhost:3000/15808");
  });
});
describe(" Product page", () => {
  it("sucessfully load", () => {
    cy.visit("http://localhost:3000/shopping");
  });
});
