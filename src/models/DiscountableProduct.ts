

//1) Challenge part

//import { Product } from './Product';

// Interface for products that can have a discount
export interface DiscountableProduct {
    // Any class that implements this must have this method
    applyDiscount(discountPercent: number): void;
}