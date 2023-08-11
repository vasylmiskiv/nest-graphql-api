import { Module } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossResolver } from './boss.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boss } from './entities/boss.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boss])],
  providers: [BossResolver, BossService],
  exports: [BossService],
})
export class BossModule {}
