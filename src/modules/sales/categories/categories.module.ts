import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { Product } from '../products/producst.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Category,Product])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
