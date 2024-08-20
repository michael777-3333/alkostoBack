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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'michael777',
      database: 'alkosto',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay:3000,
      retryAttempts:10,

    }),
    
    UsersModule, 
    CategoriesModule, OrdersModule, ProductsModule, DetailsOrderModule, CartsModule, DetailsCartModule, DetailsProductModule, ReviewsModule, FeaturesModule],
  controllers: [],
  providers: [  ],
})
export class AppModule {}
