import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {

    private customerId = '123456';
    constructor(private cartService: CartService) {}

    @Get(':customerId')
    async get(@Param('customerId') customerId: string) {
        const cart = await this.cartService.findOne(customerId);
        if(cart) return cart;
            else return "Data cart kosong!";
    }

    @Post('/add')
    async create(
        @Body('customerId') customerId: string,
        @Body('products') products: []
    ) {
        console.log(customerId);
        console.log(products);
        const create = await this.cartService.create({ "customerId": customerId, "products": products });

        if(create) return 'Success add product to cart';
            else return 'Fail add product to cart';
    }
}
