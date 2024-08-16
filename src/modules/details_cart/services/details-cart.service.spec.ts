import { Test, TestingModule } from '@nestjs/testing';
import { DetailsCartService } from './details-cart.service';

describe('DetailsCartService', () => {
  let service: DetailsCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsCartService],
    }).compile();

    service = module.get<DetailsCartService>(DetailsCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
