import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Review } from "../reviews/reviews.entity";
import { Order } from "../orders/orders.entity";
import { Cart } from "../carts/cars.entity";
Order
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @Column({unique:true})
    cedula:string

    @Column({length:100})
    lastname:string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @Column()
    address:string

    @Column()
    phone:string

    @OneToMany(()=>Order,(order)=>order.user)// Se referencia al campo "user" en la entidad "Order"
    orders:Order[] // Un usuario tiene varios pedidos (array de órdenes)

    @OneToMany(()=>Review,(review)=>review.user)
    review:Review[]

    @OneToMany(()=>Cart,(cart)=>cart)
    car:Cart[]

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}