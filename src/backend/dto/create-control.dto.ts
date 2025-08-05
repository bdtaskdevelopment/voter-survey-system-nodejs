import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateControlDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    @MinLength(2)
    name: string;

    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;
}
