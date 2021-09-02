import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './cart.model';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>) {}

    async findOne(customerId: string): Promise<Cart> {
        return this.cartModel.findOne({ 'customerId': customerId });
    }

    async create(data): Promise<Cart> {
        return new this.cartModel(data).save();
    }
}
