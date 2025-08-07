import { Test, TestingModule } from '@nestjs/testing';
import { UnionController } from './union.controller';

describe('UnionController', () => {
  let controller: UnionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnionController],
    }).compile();

    controller = module.get<UnionController>(UnionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
