import {ShoppingCart} from "../questions/shoppingCart";

describe('a shopping cart', () => {
  describe('when the user adds 5 Dove Soaps to the shopping cart', () => {
    const cart = new ShoppingCart();
    const singlePrice = 39.99;
    cart.addProduct('Dove Soap', 5, singlePrice);
    it('it should contain 5 Dove Soaps each with a unit price of 39.99', () => {
      expect(cart.productsInfo).toStrictEqual([{name: 'Dove Soap', quantity: 5, price: singlePrice}]);
    });
    it('the total price should equal 199.95', () => {
      expect(cart.totalPrice).toBe(199.95);
    });
  });

  describe('and then adds another 3 Dove Soaps to the shopping cart', () => {
    const cart = new ShoppingCart();
    const singlePrice = 39.99;
    cart.addProduct('Dove Soap', 5, singlePrice);
    cart.addProduct('Dove Soap', 3, singlePrice);
    it('it should contain 8 Dove Soaps each with a unit price of 39.99', () => {
      expect(cart.productsInfo).toStrictEqual([{name: 'Dove Soap', quantity: 8, price: singlePrice}]);
    });
    it('and total price should equal 319.92', () => {
      expect(cart.totalPrice).toBe(319.92);
    });
  });

  describe('and then adds another product Axe Deo with a unit price of 99.99 with a sales tax rate of 12.5%', () => {
    const cart = new ShoppingCart();
    const singlePrice1 = 39.99;
    const singlePrice2 = 99.99;
    cart.addProduct('Dove Soap', 2, singlePrice1);
    cart.addProduct('Axe Deo', 2, singlePrice2);
    it('it should contain 2 Dove Soaps each with a unit price of 39.99 and 2 Axe Deos each with a unit price of 99.99', () => {
      expect(cart.productsInfo).toStrictEqual(
        [
          {name: 'Dove Soap', quantity: 2, price: singlePrice1},
          {name: 'Axe Deo', quantity: 2, price: singlePrice2}
        ]);
    });
    it('and the total sales tax amount for the shopping cart should equal 35.00', () => {
      expect(cart.totalTax).toBe(34.99);
    });
    it('and the shopping cart’s total price should equal 314.96', () => {
      expect(cart.totalPriceWithTax).toBe(314.95);
    });
  });
});