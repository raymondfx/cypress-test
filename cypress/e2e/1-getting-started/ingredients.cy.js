describe("Table Sorting", () => {
    beforeEach(() => {
      // Visit the webpage with the table
      cy.visit("https://kitchen.applitools.com/ingredients/table");
    });
  
    it("should sort the table", () => {
      // Find the table header for the column to sort
      cy.contains("th", "Ingredient")
        .click()
        .then(() => {
          // Verify if the table is sorted in ascending order for the Ingredient column
          cy.get("tbody tr td:nth-child(1)").then((columnData) => {
            const columnValues = Array.from(columnData, (el) => el.innerText.toLowerCase());
            const sortedColumnValues = [...columnValues].sort();
            expect(columnValues).to.deep.equal(sortedColumnValues);
          });
        });
  
      // Click on the same header again to sort the table in descending order
      cy.contains("th", "Ingredient")
        .click()
        .then(() => {
          // Verify if the table is sorted in descending order for the Ingredient column
          cy.get("tbody tr td:nth-child(1)").then((columnData) => {
            const columnValues = Array.from(columnData, (el) => el.innerText.toLowerCase());
            const sortedColumnValues = [...columnValues].sort().reverse();
            expect(columnValues).to.deep.equal(sortedColumnValues);
          });
        });
    });
  });
  