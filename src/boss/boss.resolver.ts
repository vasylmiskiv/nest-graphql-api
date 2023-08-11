import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BossService } from './boss.service';
import { Boss } from './entities/boss.entity';
import { CreateBossInput } from './dto/create-boss.input';
import { UpdateBossInput } from './dto/update-boss.input';

@Resolver(() => Boss)
export class BossResolver {
  constructor(private readonly bossService: BossService) {}

  @Query(() => [Boss], { name: 'boss' })
  findAll() {
    return this.bossService.findAll();
  }

  @Query(() => Boss, { name: 'boss' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bossService.findOne(id);
  }

  @Mutation(() => Boss)
  createBoss(@Args('createBossInput') createBossInput: CreateBossInput) {
    return this.bossService.create(createBossInput);
  }

  @Mutation(() => Boss)
  updateBoss(@Args('updateBossInput') updateBossInput: UpdateBossInput) {
    return this.bossService.update(updateBossInput.id, updateBossInput);
  }

  @Mutation(() => Boss)
  removeBoss(@Args('id', { type: () => Int }) id: number) {
    return this.bossService.remove(id);
  }
}
