import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/categories.entity";
import { Deatils_order } from "../details_order/detail-order.entity";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
    
    @Column()
    description:string

    @Column()
    base_price:number

    @Column()
    stock:number

    @OneToOne(()=>Category)
    @JoinColumn()
    category:Category

    @OneToMany(()=>Deatils_order,(deatils_order)=>deatils_order.product)
    detail_order:Deatils_order

}