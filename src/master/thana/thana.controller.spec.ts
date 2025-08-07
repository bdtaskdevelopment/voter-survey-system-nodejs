import { Test, TestingModule } from '@nestjs/testing';
import { ThanaController } from './thana.controller';

describe('ThanaController', () => {
  let controller: ThanaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThanaController],
    }).compile();

    controller = module.get<ThanaController>(ThanaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
