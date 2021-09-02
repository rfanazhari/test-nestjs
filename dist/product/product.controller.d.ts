import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<import("./product.model").Product>;
    create(name: string, stock: number): Promise<import("./product.model").Product>;
    get(permalink: string): Promise<{}>;
}
