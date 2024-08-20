import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Details_product } from "../details_product/details_product.entity";
import { Details_products_and_features } from "../details_products_and_features/details_products_and_features.entity";

@Entity()
export class Feature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    
    // @ManyToOne(()=>Details_product,(details_product)=>details_product.features)
    // @JoinColumn({
    //     name:'details_order_id'
    // })
    // details_product:Details_product

    @OneToMany(()=>Details_products_and_features,(details_P_F)=>details_P_F.feature)
    details_P_F:Details_products_and_features[]


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}