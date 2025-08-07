import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCenterDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsInt()
    union_id: number;

    @IsInt()
    thana_id: number;

    @IsInt()
    ashan_id: number;

    @IsInt()
    district_id: number;

    @IsInt()
    division_id: number;

    @IsInt()
    male_voter_number: number;

    @IsInt()
    female_voter_number: number;
}