import { IsNotEmpty, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreateDetailsProductDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    size: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    color: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    priceVariant: number;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 50)
    sku: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    stock: number;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 500)
    specifications: string;
  
    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @IsNotEmpty()
    @IsNumber()
    details_P_F_Id:number;
  }