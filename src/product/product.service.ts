import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ) {}

    async all(): Promise<Product> {
        return this.productModel.aggregate([
            { $project: {
                _id: 0,
                productId: "$_id",
                name: "$name",
                stock: "$stock",
                permalink: "$permalink",
            } }
        ]).exec();
    }

    async create(data): Promise<Product> {
        return new this.productModel(data).save();
    }

    async get(permalink: string): Promise<Product> {
        return this.productModel.findOne({ permalink: permalink });
    }
}
