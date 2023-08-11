import { Test, TestingModule } from '@nestjs/testing';
import { BossResolver } from './boss.resolver';
import { BossService } from './boss.service';

describe('BossResolver', () => {
  let resolver: BossResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BossResolver, BossService],
    }).compile();

    resolver = module.get<BossResolver>(BossResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
