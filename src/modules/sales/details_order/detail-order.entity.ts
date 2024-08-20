import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @JoinColumn({
        name:'product_id'
    })
    product:Product;

    @ManyToOne(()=>Order,(order)=>order.details_order)
    @JoinColumn({
        name:'order_id'
    })
    order:Order;
    
}