"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
/*
export class PhysicalProduct extends Product {
    
    weight: number;     // measurement unit for physical products

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price)  // initializing parent class properties, by calling the parent constructor for sku, name, price
        this.weight = weight //initializes child-specific property. IOWs it calls the parent constructor for sku, name, price
        // this.weight refers to the 'weight' property ( weight: number) whose value is passed to this class's constructor (PhysicalProduct) by the object instance."
        // this.weight refers to the 'weight' property (weight: number) of this PhysicalProduct instance, which is set using the value passed to the constructor.
        // how is value passed to the constructor?
        // 1) by creaitng an instance of teh product ex: [const keyboard = new PhysicalProduct("A123", "Mechanical Keyboard", 99.99, 1.5);]
        // 2) that you can print/test for ex, [console.log(keyboard.weight)]
    }
    */
/////////////// 3) Challenge part
//const minDiscountWeight = 10 // kg
//const weightDiscountRate = 5
class PhysicalProduct extends Product_1.Product {
    weight; // weight property for physical products
    constructor(sku, name, price, weight) {
        super(sku, name, price); // call the parent constructor
        this.weight = weight; // initialize the weight property
    }
    ///////////////
    //overriding the base class Product's getPriceWithTax() method with a one that has a new tax rate for physicall products.
    getPriceWithTax() {
        const taxRate = 0.10; //tax rate for physical products only.
        return this.price + (this.price * taxRate); // 'this.price' refers to the price property inherited from the Product base class.
        //the method will allow PhysicalProduct to overide the parent's method taxrate when calculating the after-tax-price for physical products only.
        //by defining a method with the same name in the subclass, TypeScript will use this one instead of the parent’s version. This is POLYMORPHISM. 
    }
    get formattedWeight() {
        return `${this.weight} kg`; // e.g., "2.5 kg"
    }
    // 4) Challenge part
    // Implement the required method from DiscountableProduct
    applyDiscount(discountPercent) {
        // Reduce the current price by the given percentage
        this.price = this.price - (this.price * (discountPercent / 100));
    }
    applyBulkDiscountApproved() {
        // Check if the product qualifies for a bulk discount
        //if (this.weight > PhysicalProduct.minDiscountWeight) {
        if (this.weight > 10) {
            console.log("Bulk discount applied (5%)");
            // Reuse existing discount logic (good OOP!)
            //this.applyDiscount(PhysicalProduct.weightDiscountRate)
            this.applyDiscount(5);
        }
    }
}
exports.PhysicalProduct = PhysicalProduct;
//const chair = new PhysicalProduct("SKU123", "Office Chair", 100, 15);
//console.log(chair.formattedWeight); // "15 kg"
/*
tsc src/models/PhysicalProduct.ts
node src/models/PhysicalProduct.js
*/ 
//# sourceMappingURL=PhysicalProduct.js.map