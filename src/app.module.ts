import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { DetailsOrderModule } from './modules/details_order/details_order.module';
import { CartsModule } from './modules/carts/carts.module';
import { DetailsCartModule } from './modules/details_cart/details_cart.module';
import { DetailsProductModule } from './modules/details_product/details_product.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { FeaturesModule } from './modules/features/features.module';
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
