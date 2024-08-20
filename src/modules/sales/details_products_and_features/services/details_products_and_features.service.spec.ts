import { Test, TestingModule } from '@nestjs/testing';
import { DetailsProductsAndFeaturesService } from './details_products_and_features.service';

describe('DetailsProductsAndFeaturesService', () => {
  let service: DetailsProductsAndFeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsProductsAndFeaturesService],
    }).compile();

    service = module.get<DetailsProductsAndFeaturesService>(DetailsProductsAndFeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
