import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class WardUpdateDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name!: string;

  @IsOptional()
  @IsInt({ message: 'Division ID must be a valid integer' })
  division_id!: number;

  @IsOptional()
  @IsInt({ message: 'District ID must be a valid integer' })
  district_id!: number;
}
