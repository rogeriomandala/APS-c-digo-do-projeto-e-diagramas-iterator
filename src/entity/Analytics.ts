import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('analytics')
export default class Analytics {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  inveniraStdID: number;

  @Column({ nullable: true })
  activityID: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  value: string;

  @Column()
  @CreateDateColumn()
  date: Date;
}