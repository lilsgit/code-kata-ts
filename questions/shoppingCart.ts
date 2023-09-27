export class ProductInfo {
  name: string;
  quantity: number;
  price: number;
}

export class ShoppingCart {
  productsInfo: ProductInfo[] = [];

  addProduct(productName: string, quantity: number, price: number) {
    const productIndex = this.productsInfo.findIndex(product => product.name === productName && product.price === price);

    if (productIndex !== -1) {
      this.productsInfo[productIndex].quantity += quantity;
    } else {
      this.productsInfo.push({name: productName, quantity: quantity, price: price});
    }
  }

  get totalPrice(): number {
    let price = 0;
    for (const info of this.productsInfo) {
      price = price + info.price * info.quantity;
    }
    return Math.round(price * 100) / 100;
  }

  get totalTax(): number {
    let tax = 0;
    for (const info of this.productsInfo) {
      tax = tax + info.price * info.quantity * 0.125;
    }
    return Math.round(tax * 100) / 100;
  }

  get totalPriceWithTax(): number {
    return this.totalPrice + this.totalTax;
  }
}