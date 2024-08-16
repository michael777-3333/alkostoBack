import { Module } from '@nestjs/common';
import { DetailsProductController } from './details_product.controller';
import { DetailsProductService } from './services/details-product.service';

@Module({
  controllers: [DetailsProductController],
  providers: [DetailsProductService]
})
export class DetailsProductModule {}
