import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../products/producst.entity";
import { User } from "../users/users.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 500 })
    description: string;

    @ManyToOne(()=>Product,(product)=>product.review)
    @JoinColumn({
        name:'product_id'
    })
    product:Product

    @ManyToOne(()=>User,(user)=>user.review)
    @JoinColumn({
        name:'user_id'
    })
    user:User
}