import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

@Entity({ name: 'thanas' })
export class Thana {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Index('idx_ashan')
    @Column({ type: 'int', nullable: true })
    ashan_id: number | null;

    @Index('idx_district')
    @Column({ type: 'int' })
    district_id: number;

    @Index('idx_division')
    @Column({ type: 'int' })
    division_id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
