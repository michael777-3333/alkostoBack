import { Module } from '@nestjs/common';
import { DetailsProductsAndFeaturesController } from './details_products_and_features.controller';
import { DetailsProductsAndFeaturesService } from './services/details_products_and_features.service';

@Module({
  controllers: [DetailsProductsAndFeaturesController],
  providers: [DetailsProductsAndFeaturesService]
})
export class DetailsProductsAndFeaturesModule {}
