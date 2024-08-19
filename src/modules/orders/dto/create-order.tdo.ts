import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateNested } from "class-validator";
import { User } from "src/modules/users/users.entity";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    order_date: string;
  
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
  
    @IsNotEmpty()
    @IsString()
    payment: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    total: number;
  
    @IsNotEmpty()
    @IsString()
    shipment_dereccion: string;
  
    @IsNotEmpty()
    // @ValidateNested()
    // @Type(() => User)
    userId: number;
}  