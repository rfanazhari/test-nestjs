import { Document } from "mongoose";
export declare type ProductDocument = Product & Document;
export declare class Product {
    _id: string;
    name: string;
    permalink: string;
    stock: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any>, undefined, {}>;
