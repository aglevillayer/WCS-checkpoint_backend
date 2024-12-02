import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;
  @Column({ unique: true })
  @Field()
  code: string;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  emoji: string;

  constructor(code: string = "", name: string = "", emoji: string = "") {
    super();
    this.code = code;
    this.name = name;
    this.emoji = emoji;
  }
}
