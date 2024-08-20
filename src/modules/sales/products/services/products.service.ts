import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../producst.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Category } from '../../categories/categories.entity';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,

        @InjectRepository(Category)
        private categoryRepository: Repository<Category>


    ){}

    async createProduct(product:CreateProductDto): Promise<Product>{

        try {
            const newProduct= this.productRepository.create(product)

            if(product.category_id){
                const category = await this.categoryRepository.findOne({
                    where:{id:product.category_id}
                })
                if (!category) throw new HttpException("THE CATEGORY DON'T EXIST",HttpStatus.NOT_FOUND)
                newProduct.category=category
            }

            return this.productRepository.save(newProduct)
        } catch (error) {
            console.log(error);
            throw error
        }
        
    }
}
