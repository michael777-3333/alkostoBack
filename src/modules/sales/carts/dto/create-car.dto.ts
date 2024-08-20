import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCartDto {
    @IsBoolean()
    status: string;

    @IsNotEmpty()
    @IsNumber()
    userId?: number;
}
