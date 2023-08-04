import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  sex?: string;
}
