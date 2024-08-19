import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    description: string;
  }