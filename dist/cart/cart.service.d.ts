import { Model } from 'mongoose';
import { Cart, CartDocument } from './cart.model';
export declare class CartService {
    private readonly cartModel;
    constructor(cartModel: Model<CartDocument>);
    findOne(customerId: string): Promise<Cart>;
    create(data: any): Promise<Cart>;
}
