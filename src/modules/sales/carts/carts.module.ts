import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CarstService } from './services/carst.service';

@Module({
  controllers: [CartsController],
  providers: [CarstService]
})
export class CartsModule {}
