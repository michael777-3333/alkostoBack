import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { DetailsOrderModule } from './modules/details_order/details_order.module';
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
      synchronize: false,
      retryDelay:3000,
      retryAttempts:10,

    }),
    
    UsersModule, 
    CategoriesModule, OrdersModule, ProductsModule, DetailsOrderModule],
  controllers: [],
  providers: [  ],
})
export class AppModule {}
