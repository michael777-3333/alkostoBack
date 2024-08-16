import { Test, TestingModule } from '@nestjs/testing';
import { DetailsCartController } from './details_cart.controller';

describe('DetailsCartController', () => {
  let controller: DetailsCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsCartController],
    }).compile();

    controller = module.get<DetailsCartController>(DetailsCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
