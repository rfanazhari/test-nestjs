import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    _id: string;

    @Prop()
    name: string;
    
    @Prop()
    permalink: string;
    
    @Prop()
    stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);