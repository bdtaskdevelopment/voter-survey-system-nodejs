import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { Public } from './jwt/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<UserLoginResponseDto> {
        const user = await this.authService.validateUser(loginDto.loginId, loginDto.password);
        return this.authService.loginUser(user);
    }
}
