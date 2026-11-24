import { People } from 'src/people/entities/people.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  // Uma entidade é basicamente um modelo de dados, que representa uma tabela no banco de dados
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Column({ default: false })
  opened: boolean;

  @Column()
  date: Date; // createdAt

  @ManyToOne(() => People)
  @JoinColumn({ name: 'from' })
  from: People;

  @ManyToOne(() => People)
  @JoinColumn({ name: 'to' })
  to: People;
}
