import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/categories.entity";
import { Deatils_order } from "../details_order/detail-order.entity";
import { Details_product } from "../details_product/details_product.entity";
import { Review } from "../reviews/reviews.entity";
import { Details_cart } from "../details_cart/details_cart.entity";

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

    @OneToMany(()=>Details_product,(details_product)=>details_product.product)
    detail_product:Details_product

    @OneToMany(()=>Review, (reviews)=>reviews.product)
    review:Review

    @OneToMany(()=>Details_cart,(deatils_cart)=>deatils_cart.product)
    detail_cart:Details_cart
}