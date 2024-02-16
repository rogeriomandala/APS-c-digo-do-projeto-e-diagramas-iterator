import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('activity')
export default class Activity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  activityID: number;

  @Column()
  InvenIRAstdID: number;

  @Column()
  s1: string;

  @Column()
  s2: string;

  @Column()
  s3: string;

  @Column()
  redirectURL: string;

  @Column()
  @CreateDateColumn()
  date: Date;
}