import { Product } from '../models/Product';

// Sort products by price (low → high)
export function sortByPrice(products: Product[]): Product[] { // slice() creates a copy 
    return products.slice().sort((a, b) => a.price - b.price);
}

// Sort products alphabetically by name (A → Z)
export function sortByName(products: Product[]): Product[] {
    return products.sort((a, b) => {
        return a.name.localeCompare(b.name)
});

    
}
