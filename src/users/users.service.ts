import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserInput: CreateUserInput): Promise<any> {
    const newUser = this.usersRepository.create(createUserInput);

    return this.usersRepository.save(newUser);
  }

  async findAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
