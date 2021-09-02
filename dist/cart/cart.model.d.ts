import { Document } from "mongoose";
export declare type CartDocument = Cart & Document;
export declare class Cart {
    _id: string;
    customerId: string;
    products: [];
}
export declare const CartSchema: import("mongoose").Schema<Document<Cart, any, any>, import("mongoose").Model<Document<Cart, any, any>, any, any>, undefined, {}>;
