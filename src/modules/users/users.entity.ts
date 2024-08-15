import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../orders/orders.entity";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @Column({length:100})
    lastname:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    address:string

    @Column()
    phone:string

    @OneToMany(()=>Order,(order)=>order.user)// Se referencia al campo "user" en la entidad "Order"
    orders:Order[] // Un usuario tiene varios pedidos (array de órdenes)
}