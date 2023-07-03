describe("the upload demo", () => {

    beforeEach(() => {
        cy.visit("https://example.org");
    });

    it("TD-2 should find a title element", () => {
        cy.get("h1").should("exist");
    });

    it("TD-12 should find two paragraph elements", () => {
        cy.get("p").should("have.length", 2);
    });

    it("TD-13 should fail to find a span element", () => {
        cy.get("span").should("exist");
    });
    it("TD-14 should fail to find a span element", () => {
        cy.get("span").should("exist");
    });

})
