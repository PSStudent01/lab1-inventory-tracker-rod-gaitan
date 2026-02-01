"use strict";
/*
import { PhysicalProduct } from "./models/PhysicalProduct";

const laptop = new PhysicalProduct("SKU123", "Laptop", 1000, 5);

console.log(laptop.displayDetails());
console.log("Price w/ tax:", laptop.getPriceWithTax());
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
import { DigitalProduct } from "./models/DigitalProduct";

const ebook = new DigitalProduct("SKUBK870789", "Mr-Ebook", 30, 5);

console.log(ebook.displayDetails());
console.log("Price w/ tax:", ebook.getPriceWithTax());
*/
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const server = new PhysicalProduct_1.PhysicalProduct("125765", "DELL server", 2500, 20);
//console.log(server.displayDetails())
//console.log( "Price w/ tax:", server.getPriceWithTax())
const DigitalProduct_1 = require("./models/DigitalProduct");
const ebook = new DigitalProduct_1.DigitalProduct("5987797", "Justice League e-book", 30, 200);
const taxCalculator_1 = require("./utils/taxCalculator");
const productSorter_1 = require("./utils/productSorter");
const products = [server, ebook];
for (const product of products) {
    console.log(product.displayDetails());
    //console.log(`Final price with tax: $${product.getPriceWithTax()}`)
    console.log(`Final price with tax: $${(0, taxCalculator_1.calculateTax)(product)}`);
}
// 5) testing challenge
console.log("\nBefore Discount:");
console.log(server.displayDetails());
// Apply a 10% discount to the physical product
server.applyDiscount(10);
console.log("\nAfter 10% Discount:");
console.log(server.displayDetails());
////////////
//import { PhysicalProduct } from "./models/PhysicalProduct"
//import { DigitalProduct } from "./models/DigitalProduct"
//import { sortByName } from "./utils/productSorter"
// Create products
//const products = [
// new PhysicalProduct("SKU125", "DELL server", 2500, 15),
//new DigitalProduct("SKU598", "Justice League e-book", 30, 500),
//new PhysicalProduct("SKU222", "Apple Keyboard", 120, 2),
//];
// BEFORE sorting
console.log("\nBefore sorting:");
products.forEach(product => {
    console.log(product.name);
});
// Sort by name
(0, productSorter_1.sortByName)(products);
// AFTER sorting
console.log("\nAfter sorting by name:");
products.forEach(product => {
    console.log(product.name);
});
// Apply Discount if weight is more than 10 kg
console.log("\nBefore bulk discount:");
console.log(server.displayDetails());
// Apply bulk discount if eligible
server.applyBulkDiscountApproved();
console.log("\nAfter bulk discount:");
console.log(server.displayDetails());
//# sourceMappingURL=main.js.map