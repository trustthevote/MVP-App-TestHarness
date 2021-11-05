describe('Voter', () => {
  beforeEach(() => {
    cy.viewport('iphone-5');
  });

  it('casts a vote', () => {
    cy.visit('/');
    cy.wait(2000);

    cy.get('input[placeholder="First Name"]').type('Zebra');
    cy.get('input[placeholder="Last Name"]').type('Yak');
    cy.contains('Next').click();
    cy.contains('app-ballot-form', 'Welcome Zebra').should('be.visible');

    cy.contains('app-ballot-form ion-button', 'Start').click();
    cy.contains('app-ballot-complete', 'Your ballot is complete').should('be.visible');
    cy.contains('app-ballot-complete', 'Choose A Return').should('be.visible');

    cy.contains('app-ballot-complete .bottom-div-text', 'Digital Return').click();
    cy.contains('app-request-access-code', 'To use digital return, touch Next').should('be.visible');

    cy.contains('app-request-access-code ion-button', 'Next').click();
    cy.contains('app-access-code', 'Enter Access Code').should('be.visible');

    cy.get('app-access-code input[tabindex="1"]').type('1');
    cy.get('app-access-code input[tabindex="2"]').type('2');
    cy.get('app-access-code input[tabindex="3"]').type('3');
    cy.get('app-access-code input[tabindex="4"]').type('4');
    cy.get('app-access-code input[tabindex="5"]').type('5');

    cy.contains('app-access-code ion-button', 'Next').click();
    cy.contains('app-before-you-finish', 'Before You Finish').should('be.visible');

    cy.contains('app-before-you-finish ion-button', 'Next').click();
    cy.contains('app-ballot-fingerprint', 'Your Ballot Has Been Sealed and Is Ready To Cast').should('be.visible');

    cy.contains('app-ballot-fingerprint ion-button', 'Cast Ballot Now').click();
    cy.contains('app-sending-confirmation', 'Congrats! Your ballot has been cast!').should('be.visible');
  });
});
