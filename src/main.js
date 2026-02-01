"use strict";
/*
import { PhysicalProduct } from "./models/PhysicalProduct";

const laptop = new PhysicalProduct("SKU123", "Laptop", 1000, 5);

console.log(laptop.displayDetails());
console.log("Price w/ tax:", laptop.getPriceWithTax());
*/
Object.defineProperty(exports, "__esModule", { value: true });
const DigitalProduct_1 = require("./models/DigitalProduct");
const ebook = new DigitalProduct_1.DigitalProduct("SKUBK870789", "Mr-Ebook", 30, 5);
console.log(ebook.displayDetails());
//console.log("Price w/ tax:", laptop.getPriceWithTax());
//# sourceMappingURL=main.js.map