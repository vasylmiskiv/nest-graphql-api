import { Injectable } from '@nestjs/common';
import { CreateBossInput } from './dto/create-boss.input';
import { UpdateBossInput } from './dto/update-boss.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Boss } from './entities/boss.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BossService {
  constructor(
    @InjectRepository(Boss) private bossRepository: Repository<Boss>,
  ) {}

  create(createBossInput: CreateBossInput) {
    const newBoss = this.bossRepository.create(createBossInput);
    return this.bossRepository.save(newBoss);
  }

  findAll() {
    return this.bossRepository.find();
  }

  findOne(id: number) {
    return this.bossRepository.findOneBy({ id });
  }

  update(id: number, updateBossInput: UpdateBossInput) {
    return `This action updates a #${id} boss`;
  }

  remove(id: number) {
    return `This action removes a #${id} boss`;
  }
}
