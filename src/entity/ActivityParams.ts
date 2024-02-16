import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('activity_params')
export default class ActivityParams {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  activityID: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  @CreateDateColumn()
  date: Date;
}