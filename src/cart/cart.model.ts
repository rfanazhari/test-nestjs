import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    _id: string;
    
    @Prop()
    customerId: string;

    @Prop()
    products: [];
}


export const CartSchema = SchemaFactory.createForClass(Cart);