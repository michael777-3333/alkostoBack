import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../producst.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    async createProduct(product:any): Promise<any>{

        const productFound= await this.productRepository.findOne({
            where:{
                id:product.id
            }
        })

        if (productFound) throw new HttpException('THIS PRODUCT ALREADY EXIST',HttpStatus.CONFLICT)

        const newProduct= this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }
}
