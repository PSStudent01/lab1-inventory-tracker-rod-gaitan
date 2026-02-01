

// src/utils/taxCalculator.ts

import { Product } from '../models/Product';

// Function to calculate price including tax
export function calculateTax(product: Product): number {
    // Call the product's own getPriceWithTax() method
    return product.getPriceWithTax();
}
