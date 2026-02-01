"use strict";
/*
// Illustrating each component of a basic class:             **********************   // VIP FOR ILLLUSTRAITON PURPOSES ONLY!!!!! ******************
//
class Product {                    // Declaring a class named 'Product'
  name: string;                    // Property: 'name', of type string, to hold the name of the product
  price: number;                   // Property: 'price', of type number, to hold the price of the product

  constructor(name: string, price: number) {  // Constructor method that takes two parameters (name and price)
    this.name = name;                      // Assigns the 'name' parameter value to the 'this.name' property of the class
    this.price = price;                    // Assigns the 'price' parameter value to the 'this.price' property of the class
  }

  displayDetails(): string {          // Method that returns a string describing the product's name and price
    return `${this.name} costs $${this.price}`;  // Template string that combines the name and price properties into a readable format
  }
}

const product = new Product("Laptop", 1000);  // Creating a 'new' instance (aka object) of class 'Product' with 'name' = "Laptop" and 'price' = 1000
console.log(product.name);              // Accessing and printing the 'name' property of the 'product' object ("Laptop")
console.log(product.price);             // Accessing and printing the 'price' property of the 'product' object (1000)



2.	Create the Product 'Base' Class:
o	Inside src/models/Product.ts, create a Product 'base class' with the following:
	Properties: sku (string), name (string), price (number).
	Methods:
	displayDetails() - a method that returns a formatted string with the product’s details.
	getPriceWithTax() - a method that calculates the final price of the product with tax.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//- Inside src/models/Product.ts, create a Product 'base class' with the following: 
//-- Properties: sku (string), name (string), price (number).
class Product {
    sku;
    name;
    price; // this is a BASE CLASS =  a blueprint that other, more specific classes extend, so it needs to be exported with the 'EXPORT' keyword when used across files.
    // also you TYPE ANNOTATE the parameters (aka properties) for the base class
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: ${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        //price_with_tax = price + (price × tax_rate) //basic tax formula
        //return this.price (+ this.price * .50)    //calculating the tax with a fixed tax rate (not store in variable)
        const taxRate = .50; // tax rate stored in variable
        return this.price + (this.price * taxRate);
    }
}
exports.Product = Product;
/*
const productOne = new Product ("8786969876", "LG TV", 200)   // {Ureka !!teh class is what's being called when trying to feed the object!}
console.log( productOne.displayDetails())
*/
/*
tsc src/models/Product.ts
node src/models/Product.js
*/
//# sourceMappingURL=Product.js.map