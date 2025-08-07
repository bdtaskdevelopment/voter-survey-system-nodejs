import { District } from 'src/master/district/entities/district.entity';
import { Division } from 'src/master/division/entities/division.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('ashans')
export class Ashan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ name: 'division_id', type: 'int' })
  division_id!: number;

  @ManyToOne(() => Division)
  @JoinColumn({ name: 'division_id' })
  division!: Division;

  @Column({ name: 'district_id', type: 'int' })
  district_id!: number;

  @ManyToOne(() => District)
  @JoinColumn({ name: 'district_id' })
  district!: District;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at!: Date;
}
