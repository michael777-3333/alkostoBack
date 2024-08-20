import { IsString, MaxLength } from "class-validator";

export class CreateFeatureDto {
    @IsString()
    @MaxLength(100)
    name: string;
}