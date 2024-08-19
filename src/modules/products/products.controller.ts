import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './producst.entity';

@Controller('products')
export class ProductsController {
    constructor(
        private _productService:ProductsService
    ){}

    @Post()
    async createProduct(@Body() product:CreateProductDto): Promise<Product>{
        return this._productService.createProduct(product)
    }
}

