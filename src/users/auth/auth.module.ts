import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forFeature([User, Role]),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'c7374ffa84c1ec5f3b817e3a8358bc2cc2abe240',
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
