import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/sales/users/users.module';
import { CategoriesModule } from './modules/sales/categories/categories.module';
import { OrdersModule } from './modules/sales/orders/orders.module';
import { ProductsModule } from './modules/sales/products/products.module';
import { DetailsOrderModule } from './modules/sales/details_order/details_order.module';
import { CartsModule } from './modules/sales/carts/carts.module';
import { DetailsCartModule } from './modules/sales/details_cart/details_cart.module';
import { DetailsProductModule } from './modules/sales/details_product/details_product.module';
import { ReviewsModule } from './modules/sales/reviews/reviews.module';
import { FeaturesModule } from './modules/sales/features/features.module';
import { DetailsProductsAndFeaturesModule } from './modules/sales/details_products_and_features/details_products_and_features.module';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNC === 'true',
      retryDelay: Number(process.env.DB_RETRY_DELAY) || 3000,
      retryAttempts: Number(process.env.DB_RETRY_ATTEMPTS) || 10,
    }),
    
    
    UsersModule, 
    CategoriesModule, OrdersModule, ProductsModule, DetailsOrderModule, CartsModule, DetailsCartModule, DetailsProductModule, ReviewsModule, FeaturesModule, DetailsProductsAndFeaturesModule],
  controllers: [],
  providers: [  ],
})
export class AppModule {}
