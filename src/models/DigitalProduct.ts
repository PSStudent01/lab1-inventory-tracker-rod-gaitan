
import { Product } from './Product'

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price) 
        this.fileSize = fileSize
    }

    getPriceWithTax(): number {
        const taxRate = 0.30
        return this.price + (this.price * taxRate)
    }

    get formattedFileSize(): string {
    return `${this.fileSize} MB`; // or GB depending on your convention
}


}



/*
tsc src/models/DigitalProduct.ts
node src/models/DigitalProduct.js
*/