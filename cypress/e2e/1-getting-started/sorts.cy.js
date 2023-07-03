describe('Sorting table', () => {
    it('Sorts', () => {
     cy.visit('index.html')
     cy.get('#myGrid') // table
    .get('[role=rowgroup] .ag-row')
    .should('have.length', 3)

    cy.log('**sort by price**').wait(1000)
      cy.contains('.ag-header-cell-label', 'Price').click()
      // check ↑ is visible
      cy.contains('.ag-header-cell-label', 'Price')
      .find('[ref=eSortAsc]').should('be.visible')
    })
})