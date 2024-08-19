// import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsNumber, IsPositive, ValidateNested } from "class-validator";
import { Order } from "src/modules/orders/orders.entity";
import { Product } from "src/modules/products/producst.entity";

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
    // @ValidateNested()
    // @Type(() => Product)
    product_id: number;
  
    @IsNotEmpty()
    // @ValidateNested()
    // @Type(() => Order)
    order_id: number;
  }