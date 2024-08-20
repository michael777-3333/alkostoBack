import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Details_cart } from "../details_cart/details_cart.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // userId: number;

    @Column()
    createdAt: Date;

    @Column({ length: 20 })
    status: string;

    @OneToMany(()=>Details_cart,(detail_cart)=>detail_cart.cart)
    detail_cart:Details_cart

    @CreateDateColumn({ type: 'timestamp' })
    createdAt2: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}