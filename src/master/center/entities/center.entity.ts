import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('centers')
export class Center {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    union_id: number;

    @Column()
    thana_id: number;

    @Column()
    ashan_id: number;

    @Column()
    district_id: number;

    @Column()
    division_id: number;

    @Column()
    male_voter_number: number;

    @Column()
    female_voter_number: number;

    // @ManyToOne(() => Union)
    // @JoinColumn({ name: 'union_id' })
    // union: Union;

    // @ManyToOne(() => Thana)
    // @JoinColumn({ name: 'thana_id' })
    // thana: Thana;

    // @ManyToOne(() => Ashan)
    // @JoinColumn({ name: 'ashan_id' })
    // ashan: Ashan;

    // @ManyToOne(() => District)
    // @JoinColumn({ name: 'district_id' })
    // district: District;

    // @ManyToOne(() => Division)
    // @JoinColumn({ name: 'division_id' })
    // division: Division;
}