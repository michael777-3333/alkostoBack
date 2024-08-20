import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository:Repository<Category>
    ){}

    async createCategory(category:CreateCategoryDto): Promise<Category>{
        try {
            const newCategory=this.categoryRepository.create(category)
            return this.categoryRepository.save(newCategory)
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
