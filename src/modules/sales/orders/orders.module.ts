import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { User } from '../users/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order,User])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
