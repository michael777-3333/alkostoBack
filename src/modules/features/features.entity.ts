import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Details_product } from "../details_product/details_product.entity";

@Entity()
export class Feature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    
    @ManyToOne(()=>Details_product,(details_product)=>details_product.features)
    @JoinColumn({
        name:'details_order_id'
    })
    details_product:Details_product
}