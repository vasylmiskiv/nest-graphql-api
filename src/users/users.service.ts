import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { BossService } from 'src/boss/boss.service';
import { Boss } from 'src/boss/entities/boss.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private bossService: BossService,
  ) {}

  createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);

    return this.usersRepository.save(newUser);
  }

  findAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findUser(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  getBoss(bossId: number): Promise<Boss> {
    return this.bossService.findOne(bossId);
  }
}
