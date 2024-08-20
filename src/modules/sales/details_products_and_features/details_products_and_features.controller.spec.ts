import { Test, TestingModule } from '@nestjs/testing';
import { DetailsProductsAndFeaturesController } from './details_products_and_features.controller';

describe('DetailsProductsAndFeaturesController', () => {
  let controller: DetailsProductsAndFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsProductsAndFeaturesController],
    }).compile();

    controller = module.get<DetailsProductsAndFeaturesController>(DetailsProductsAndFeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
