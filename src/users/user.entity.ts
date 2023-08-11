import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Boss } from 'src/boss/entities/boss.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  sex: string;

  @Column()
  @Field()
  bossId: number;

  @ManyToOne(() => Boss, (boss) => boss.users)
  @Field((type) => Boss)
  boss: Boss;
}
