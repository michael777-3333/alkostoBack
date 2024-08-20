import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../products/producst.entity";
import { Feature } from "../features/features.entity";
import { Details_products_and_features } from "../details_products_and_features/details_products_and_features.entity";

@Entity()
export class Details_product{
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // productId: number;

    @Column({ length: 20 })
    size: string;

    @Column({ length: 20 })
    color: string;

    @Column()
    priceVariant: number;

    @Column({ length: 50 })
    sku: string;

    @Column()
    stock: number;

    @Column({ length: 500 })
    specifications: string;

    @ManyToOne(()=> Product,(product)=>product.detail_product)
    @JoinColumn({
        name:'product_id'
    })
    product:Product


    @OneToMany(()=> Details_products_and_features,(details_products_and_features) =>details_products_and_features.detailProduct)
    details_P_F:Details_products_and_features[]

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}