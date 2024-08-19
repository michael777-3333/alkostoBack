import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './producst.entity';
import { Category } from '../categories/categories.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product,Category])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
