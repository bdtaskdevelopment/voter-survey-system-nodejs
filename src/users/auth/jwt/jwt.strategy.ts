import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'c7374ffa84c1ec5f3b817e3a8358bc2cc2abe240',
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, loginId: payload.loginId, role: payload.userRole };
    }
}