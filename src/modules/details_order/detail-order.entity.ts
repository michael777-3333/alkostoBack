import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/producst.entity";
import { Order } from "../orders/orders.entity";

@Entity()
export class Deatils_order{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    quantity:number

    @Column()
    unit_price:number

    @Column()
    subtotal:number

    @ManyToOne(()=> Product,(product)=>product.detail_order)
    product:Product[]

    @ManyToOne(()=>Order,(order)=>order.details_order)
    order:Order[]
    
}