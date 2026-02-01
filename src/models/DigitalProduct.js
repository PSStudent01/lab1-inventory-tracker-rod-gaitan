"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        const taxRate = 0.30;
        return this.price + (this.price * taxRate);
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`; // or GB depending on your convention
    }
}
exports.DigitalProduct = DigitalProduct;
/*
tsc src/models/DigitalProduct.ts
node src/models/DigitalProduct.js
*/ 
//# sourceMappingURL=DigitalProduct.js.map