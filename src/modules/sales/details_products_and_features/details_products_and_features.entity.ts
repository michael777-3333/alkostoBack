import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Feature } from "../features/features.entity";
import { Details_product } from "../details_product/details_product.entity";


@Entity()
export class Details_products_and_features{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Feature,(feature)=>feature.details_P_F)
    @JoinColumn({
        name:'feature_id'
    })
    feature:Feature

    @ManyToOne(()=>Details_product,(detail_product)=>detail_product.details_P_F)
    @JoinColumn({
        name:'detailProduct_id'
    })
    detailProduct:Details_product
}