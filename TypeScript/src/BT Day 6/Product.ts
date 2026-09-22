export {};

class Product {
  public id: string;
  public name!: string;
  public price!: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.setName(name);
    this.setPrice(price);
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    if (name === null || name.trim().length === 0)
      throw new Error("Name cannot be empty");

    this.name = name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    if (price < 0) throw new Error("Price must >= 0");

    this.price = price;
  }
}

export default Product;
