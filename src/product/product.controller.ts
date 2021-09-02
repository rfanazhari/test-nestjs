import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

const slugify = require('slugify')

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Get()
    async all() {
        return this.productService.all();
    }

    @Post()
    async create(
        @Body('name') name: string,
        @Body('stock') stock: number
    ) {
        const permalink = slugify(name, '-');
        
        return await this.productService.create({
            name: name,
            stock: stock,
            permalink: permalink
        });
    }

    @Get(':permalink')
    async get(@Param('permalink') permalink: string ) {
        const product = await this.productService.get(permalink);
        let data = {};

        if(product) {
            data = {
                productId: product._id,
                name: product.name,
                stock: product.stock,
                permalink: product.permalink
            };
        }
        return data ?? "Data product not found!";
    }
}
