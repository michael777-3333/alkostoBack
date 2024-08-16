import { Module } from '@nestjs/common';
import { DetailsCartController } from './details_cart.controller';
import { DetailsCartService } from './services/details-cart.service';

@Module({
  controllers: [DetailsCartController],
  providers: [DetailsCartService]
})
export class DetailsCartModule {}
