import { IsString, IsNotEmpty, IsEmail, Length, IsOptional, IsPhoneNumber } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @Length(7, 10)
  cedula: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6)
  password: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsPhoneNumber('CO')
  phone?: string;
}
