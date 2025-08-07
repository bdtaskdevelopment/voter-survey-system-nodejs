import { Test, TestingModule } from '@nestjs/testing';
import { AshanController } from './ashan.controller';

describe('AshanController', () => {
  let controller: AshanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AshanController],
    }).compile();

    controller = module.get<AshanController>(AshanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
