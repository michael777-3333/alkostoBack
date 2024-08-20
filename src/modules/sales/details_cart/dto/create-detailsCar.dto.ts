import { isNotEmpty, IsNotEmpty, IsNumber } from "@nestjs/class-validator";


export class CreateDetailsCartDto {
    @IsNumber()
    quantity: number;

    @IsNumber()
    unitPrice: number;

    @IsNotEmpty()
    @IsNumber()
    productId?: number;

    @IsNotEmpty()
    @IsNumber()
    cartId?: number;
}