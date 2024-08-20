import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/producst.entity";
import { Cart } from "../carts/cars.entity";

@Entity()
export class Details_cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    unitPrice: number;

    @ManyToOne(()=> Product,(product)=>product.detail_cart)
    @JoinColumn({
        name:'product_id'
    })
    product:Product

    @ManyToOne(()=>Cart,(cart)=>cart.detail_cart)
    @JoinColumn({
        name:'cart_id'
    })
    cart:Cart

}
