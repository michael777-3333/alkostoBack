import { Module } from '@nestjs/common';
import { DetailsOrderService } from './services/details-order.service';
import { DetailsOrderController } from './details-order.controller';

@Module({
  providers: [DetailsOrderService],
  controllers: [DetailsOrderController]
})
export class DetailsOrderModule {}
