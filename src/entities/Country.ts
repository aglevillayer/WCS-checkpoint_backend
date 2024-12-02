import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;
  @Column()
  @Field()
  code: string;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  emoji: string;

  constructor(name: string = "", code: string = "", emoji: string = "") {
    super();
    this.name = name;
    this.code = code;
    this.emoji = emoji;
  }
}
