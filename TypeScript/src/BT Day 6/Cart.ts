export {};

import Product from "./Product";

class ShoppingCart {
  private items: { product: Product; quantity: number }[] = [];

  public addToCart(product: Product, quantity: number): void {
    const existingProduct = this.items.find(
      (item) => item.product.getId() === product.getId(),
    );

    existingProduct
      ? (existingProduct.quantity += quantity)
      : this.items.push({ product, quantity });
  }

  public getTotalPrice(): number {
    return this.items.reduce((accu, value) => {
      return accu + value.product.getPrice() * value.quantity;
    }, 0);
  }
}

export default ShoppingCart;
