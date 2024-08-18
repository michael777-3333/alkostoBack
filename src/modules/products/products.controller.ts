import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './services/products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private _productService:ProductsService
    ){}

    @Post()
    async createProduct(@Body() product:any): Promise<any>{
        return this._productService.createProduct(product)
    }
}

