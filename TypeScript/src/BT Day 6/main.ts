export {};

import Product from "./Product";
import ShoppingCart from "./Cart";

const phone = new Product("P001", "iPhone 15 Pro", 1000);
const headphone = new Product("P002", "AirPods", 100);
const laptop = new Product("P003", "Laptop Dell", 20);

const cart = new ShoppingCart();

cart.addToCart(phone, 1);
cart.addToCart(headphone, 2);
cart.addToCart(laptop, 5);

cart.addToCart(phone, 1);

const totalPrice = cart.getTotalPrice();
console.log(`Total Price: $${totalPrice}`);
