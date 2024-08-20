import { Test, TestingModule } from '@nestjs/testing';
import { CarstService } from './carst.service';

describe('CarstService', () => {
  let service: CarstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarstService],
    }).compile();

    service = module.get<CarstService>(CarstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
