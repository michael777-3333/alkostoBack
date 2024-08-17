import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/producst.entity";
import { Cart } from "../carts/cars.entity";

@Entity()
export class Details_cart {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // cartId: number;

    // @Column()
    // productId: number;

    @Column()
    quantity: number;

    @Column()
    unitPrice: number;

    @ManyToOne(()=> Product,(product)=>product.detail_cart)
    product:Product[]

    @ManyToOne(()=>Cart,(cart)=>cart.detail_cart)
    cart:Cart[]

}
