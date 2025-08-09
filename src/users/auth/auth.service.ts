import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { BaseService } from '../../common/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { UserLoginResponseDto } from './dto/user-login-response.dto';

@Injectable()
export class AuthService extends BaseService<User> {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ) {
        super(userRepository);
    }

    async validateUser(loginId: string, pass: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { loginId, role: { id: In([1, 2]) }, isActive: true }, relations: ['role'] });
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(pass, user.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }

    async loginUser(user: User): Promise<UserLoginResponseDto> {
        const userRole =
            user.role?.id === 1
                ? 'admin'
                : 'team_leader';

        const payload = { sub: user.id, loginId: user.loginId, role: userRole };
        const token = this.jwtService.sign(payload, {
            expiresIn: '1h',
        });

        return {
            name: user.fullNameEn ?? 'user',
            userRole,
            accessToken: token,
        };
    }
}