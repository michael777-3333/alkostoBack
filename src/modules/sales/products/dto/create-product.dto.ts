import { IsString, IsNotEmpty, IsNumber, IsOptional, IsInt, ValidateNested, IsPositive } from '@nestjs/class-validator';
import { Type } from 'class-transformer';
// import { Category } from 'src/modules/categories/categories.entity';


export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  base_price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  stock: number;


  @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => Category)
  category_id: number;

}
