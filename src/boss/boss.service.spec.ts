import { Test, TestingModule } from '@nestjs/testing';
import { BossService } from './boss.service';

describe('BossService', () => {
  let service: BossService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BossService],
    }).compile();

    service = module.get<BossService>(BossService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
