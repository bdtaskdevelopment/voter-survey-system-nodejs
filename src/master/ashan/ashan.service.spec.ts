import { Test, TestingModule } from '@nestjs/testing';
import { AshanService } from './ashan.service';

describe('AshanService', () => {
  let service: AshanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AshanService],
    }).compile();

    service = module.get<AshanService>(AshanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
