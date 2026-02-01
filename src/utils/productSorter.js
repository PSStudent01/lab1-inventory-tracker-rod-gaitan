"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPrice = sortByPrice;
exports.sortByName = sortByName;
// Sort products by price (low → high)
function sortByPrice(products) {
    return products.slice().sort((a, b) => a.price - b.price);
}
// Sort products alphabetically by name (A → Z)
function sortByName(products) {
    return products.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}
//# sourceMappingURL=productSorter.js.map