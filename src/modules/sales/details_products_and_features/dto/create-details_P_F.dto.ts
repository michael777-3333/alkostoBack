import { IsNumber } from "class-validator";

export class CreateDetailsProductsAndFeaturesDto {
    @IsNumber()
    featureId: number;

    @IsNumber()
    detailProductId: number;
}