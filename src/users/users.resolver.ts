import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Boss } from 'src/boss/entities/boss.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findUser(id);
  }

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @ResolveField((returns) => Boss)
  boss(@Parent() user: User): Promise<Boss> {
    return this.usersService.getBoss(user.id);
  }

  @Mutation((returns) => User)
  addUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}
