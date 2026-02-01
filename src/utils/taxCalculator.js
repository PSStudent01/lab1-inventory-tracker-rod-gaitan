"use strict";
// src/utils/taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// Function to calculate price including tax
function calculateTax(product) {
    // Call the product's own getPriceWithTax() method
    return product.getPriceWithTax();
}
//# sourceMappingURL=taxCalculator.js.map