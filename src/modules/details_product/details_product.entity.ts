import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}