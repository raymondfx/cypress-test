describe('Login Test', () => {

  beforeEach(() => {
    cy.visit('https://test-upg-dxp.imbank.com/auth/realms/inm-retail/protocol/openid-connect/auth?client_id=bb-web-client&redirect_uri=https%3A%2F%2Ftest-upg-dxp.imbank.com%2Finm-retail%2Fselect-context&state=d99c5892-7f56-4662-8e80-e116857a04a5&response_mode=fragment&response_type=code%20id_token%20token&scope=openid&nonce=4ed062e2-58da-4463-89d5-e6d6994bc56b&code_challenge=X-zk2BKyKh32lHlAS3iHIWn4qEc7NLn8C0isp2thMCU&code_challenge_method=S256');
    cy.get('input[name="username"]').type('0282353');
    cy.get('input[name="password"]').type('Password1*');
  
      // Submit the form
    cy.get('form').submit();
  
      // Assert that login is successful
    cy.url().should('contain', 'https://test-upg-dxp.imbank.com/inm-retail/select-context');
    cy.wait(3000);
    cy.contains('Select an account to access').should('be.visible');
});

    it.skip('TD-28 should login successfully', () => {
  
      // Enter username and password
      cy.get('input[name="username"]').type('0282353');
      cy.get('input[name="password"]').type('Password1*');
  
      // Submit the form
      cy.get('form').submit();
  
      // Assert that login is successful
      cy.url().should('contain', 'https://test-upg-dxp.imbank.com/inm-retail/select-context');
      cy.wait(3000);
      cy.contains('Select an account to access').should('be.visible');
    });
    it('TD-29 should select Individual account', () => {
  
      // Select Individual account
      cy.contains('Individual account').click();
  
      // Assert that Individual account is selected
      cy.contains('Individual account').should('have.class', 'selected');
    });
  });