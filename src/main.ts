

/*
import { PhysicalProduct } from "./models/PhysicalProduct";

const laptop = new PhysicalProduct("SKU123", "Laptop", 1000, 5);

console.log(laptop.displayDetails());
console.log("Price w/ tax:", laptop.getPriceWithTax());
*/

import { DigitalProduct } from "./models/DigitalProduct";

const ebook = new DigitalProduct("SKUBK870789", "Mr-Ebook", 30, 5);

console.log(ebook.displayDetails());
console.log("Price w/ tax:", ebook.getPriceWithTax());