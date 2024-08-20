
import { IsNotEmpty, IsNumber, IsPositive, ValidateNested } from "class-validator";


export class CreateDetailsOrderDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    quantity: number;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    unit_price: number;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    subtotal: number;
  
    @IsNotEmpty()
    product_id: number;
  
    @IsNotEmpty()
    order_id: number;
  }