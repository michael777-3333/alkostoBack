import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    product:Product[]

    @ManyToOne(()=>User,(user)=>user.review)
    user:User[]
}