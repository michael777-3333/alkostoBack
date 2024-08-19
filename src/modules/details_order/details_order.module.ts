import { Module } from '@nestjs/common';
import { DetailsOrderService } from './services/details-order.service';
import { DetailsOrderController } from './details-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deatils_order } from './detail-order.entity';
import { Order } from '../orders/orders.entity';
import { Product } from '../products/producst.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Deatils_order,Order,Product])],
  providers: [DetailsOrderService],
  controllers: [DetailsOrderController]
})
export class DetailsOrderModule {}
