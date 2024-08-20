import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateReviewDto {
    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(500)
    description: string;

    @IsNumber()
    productId: number;

    @IsNumber()
    userId: number;
}