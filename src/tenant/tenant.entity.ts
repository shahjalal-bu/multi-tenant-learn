import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({database:"IT IS DYNAMIC"})
@Unique(['host'])
export class Tenant {

  @PrimaryColumn()
  host: string;

  @Column()
  name: string;

}