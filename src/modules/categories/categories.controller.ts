import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './categories.entity';

@Controller('categories')
export class CategoriesController {
    constructor(
        private _categoryService:CategoriesService
    ){}

    @Post()
    async createCategory(@Body() category:CreateCategoryDto): Promise<Category>{
        return this._categoryService.createCategory(category)
    }
}
