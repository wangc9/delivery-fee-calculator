describe('e2e tests for the calculator app', () => {
  it('Front page can open', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Delivery fee calculator');
    cy.contains('Cart Value');
    cy.contains('Delivery Distance');
    cy.contains('Number Of Items');
    cy.contains('Order Time');
  });

  describe('Test inputs', () => {
    describe('Value of products is over 200 euros', () => {
      beforeEach(() => {
        cy.visit('http://localhost:5173');
      });

      it('Value: 200, distance: 999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('200');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 200',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 201, distance: 999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('201');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 201',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 202, distance: 999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('202');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 202',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 203, distance: 999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('203');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 203',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 204, distance: 999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('204');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 204',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 205, distance: 999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('205');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 205',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 206, distance: 1999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('206');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 206',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 207, distance: 1999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('207');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 207',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 208, distance: 1999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('208');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 208',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 209, distance: 1999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('209');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 209',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 210, distance: 1999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('210');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 210',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });

      it('Value: 211, distance: 1999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('211');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 211',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 0');
      });
    });

    describe('Value of products is less than 10 euros', () => {
      beforeEach(() => {
        cy.visit('http://localhost:5173');
      });

      it('Value: 0.34, distance: 999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('0.34');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 0.34',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 11.66',
        );
      });

      it('Value: 1.23, distance: 999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('1.23');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 1.23',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 12.92',
        );
      });

      it('Value: 2.34, distance: 999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('2.34');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 2.34',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 10.16',
        );
      });

      it('Value: 3.45, distance: 999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('3.45');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 3.45',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 10.86',
        );
      });

      it('Value: 4.56, distance: 999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('4.56');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 4.56',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 13.14',
        );
      });

      it('Value: 5.67, distance: 999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('5.67');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 5.67',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 14.44',
        );
      });

      it('Value: 6.78, distance: 1999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('6.78');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 6.78',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 7.22');
      });

      it('Value: 7.89, distance: 1999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('7.89');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 7.89',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 7.33');
      });

      it('Value: 8.9, distance: 1999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('8.9');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 8.9',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 5.6');
      });

      it('Value: 9.01, distance: 1999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('9.01');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 9.01',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 6.59');
      });

      it('Value: 0.12, distance: 1999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('0.12');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 0.12',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 15');
      });

      it('Value: 1.54, distance: 1999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('1.54');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 1.54',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 15');
      });
    });

    describe('Value of products is between 10 and 200 euros', () => {
      beforeEach(() => {
        cy.visit('http://localhost:5173');
      });

      it('Value: 10.34, distance: 999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('10.34');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 10.34',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 2');
      });

      it('Value: 11.23, distance: 999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('11.23');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 11.23',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 2.4');
      });

      it('Value: 12.34, distance: 999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('12.34');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 12.34',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 2.5');
      });

      it('Value: 13.45, distance: 999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('13.45');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 13.45',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 3');
      });

      it('Value: 14.56, distance: 999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('14.56');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 14.56',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 7.7');
      });

      it('Value: 15.67, distance: 999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('15.67');
        cy.get('[data-test-id="deliveryDistance"]').type('999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 15.67',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 9.24');
      });

      it('Value: 199.78, distance: 1999, item: 1, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('199.78');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 199.78',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 4');
      });

      it('Value: 198.89, distance: 1999, item: 1, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('198.89');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 198.89',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 4.8');
      });

      it('Value: 197.9, distance: 1999, item: 5, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('197.9');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 197.9',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 4.5');
      });

      it('Value: 196.01, distance: 1999, item: 5, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('196.01');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('5');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 196.01',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '5');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 5.4');
      });

      it('Value: 195.12, distance: 1999, item: 13, time: 2024-03-01T22:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('195.12');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 195.12',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 9.7');
      });

      it('Value: 194.54, distance: 1999, item: 13, time: 2024-03-01T17:53+02:00', () => {
        cy.get('[data-test-id="cartValue"]').type('194.54');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 194.54',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should(
          'contain',
          '\u20AC 11.64',
        );
      });
    });

    describe('Test return buttons', () => {
      beforeEach(() => {
        cy.visit('http://localhost:5173');
      });

      it('Can return in the confirmation page', () => {
        cy.get('[data-test-id="cartValue"]').type('194.54');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 194.54',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="cancelButton"]').click();
        cy.get('[data-test-id="cartValue"]').type('1');
        cy.get('[data-test-id="deliveryDistance"]').type('1499');
        cy.get('[data-test-id="numberOfItems"]').type('1');
        cy.get('[data-test-id="orderTime"]').type('010320241753');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 1',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1499 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '1');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 17:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 14.4');
        cy.get('[data-test-id="returnButton"]').click();
        cy.get('[data-test-id="cartValue"]').type('195.12');
        cy.get('[data-test-id="deliveryDistance"]').type('1999');
        cy.get('[data-test-id="numberOfItems"]').type('13');
        cy.get('[data-test-id="orderTime"]').type('010320242253');
        cy.get('[data-test-id="submitButton"]').click();
        cy.get('[data-test-id="confirmCartValue"]').should(
          'contain',
          '\u20AC 195.12',
        );
        cy.get('[data-test-id="confirmDeliveryDistance"]').should(
          'contain',
          '1999 m',
        );
        cy.get('[data-test-id="confirmNumberOfItems"]').should('contain', '13');
        cy.get('[data-test-id="confirmOrderTime"]').should(
          'contain',
          '2024-03-01 22:53',
        );
        cy.get('[data-test-id="orderConfirmButton"]').click();
        cy.get('[data-test-id="deliveryFee"]').should('contain', '\u20AC 9.7');
      });
    });
  });
});
