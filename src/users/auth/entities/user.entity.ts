import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    password: string;

    @Column({ name: 'password_expiry', type: 'date', nullable: true })
    passwordExpiry?: Date;

    @Column({ name: 'full_name_en', length: 200, nullable: true })
    fullNameEn?: string;

    @Column({ name: 'login_id', length: 50, unique: true, nullable: true })
    loginId?: string;

    @Column({ length: 17, nullable: true })
    mobile?: string;

    @Column({ type: 'text', nullable: true })
    address?: string;

    @ManyToOne(() => Role, { nullable: true, onUpdate: 'CASCADE', onDelete: 'SET NULL' })
    @JoinColumn({ name: 'role_id' })
    role?: Role;

    @Column({ name: 'data_map_id', length: 250, nullable: true })
    dataMapId?: string;

    @Column({ name: 'file_id', length: 250, nullable: true })
    fileId?: string;

    @Column({ name: 'is_active', type: 'boolean', nullable: true })
    isActive?: boolean;

    @ManyToOne(() => User, { nullable: true, onUpdate: 'CASCADE', onDelete: 'SET NULL' })
    @JoinColumn({ name: 'manager_user_id' })
    managerUser?: User;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
