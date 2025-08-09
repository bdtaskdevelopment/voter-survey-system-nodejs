import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    loginId: string; // This will map to your login_id in DB

    @IsString()
    @MinLength(6)
    @MaxLength(255)
    password: string;
}
