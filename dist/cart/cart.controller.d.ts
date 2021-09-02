import { CartService } from './cart.service';
export declare class CartController {
    private cartService;
    private customerId;
    constructor(cartService: CartService);
    get(customerId: string): Promise<import("./cart.model").Cart | "Data cart kosong!">;
    create(customerId: string, products: []): Promise<"Success add product to cart" | "Fail add product to cart">;
}
