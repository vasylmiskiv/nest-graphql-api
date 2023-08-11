import { CreateBossInput } from './create-boss.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBossInput extends PartialType(CreateBossInput) {
  @Field(() => Int)
  id: number;
}
