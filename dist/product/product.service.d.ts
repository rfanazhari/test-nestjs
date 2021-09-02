import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<Product>;
    create(data: any): Promise<Product>;
    get(permalink: string): Promise<Product>;
}
