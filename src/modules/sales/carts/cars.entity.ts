import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Details_cart } from "../details_cart/details_cart.entity";
import { User } from "../users/users.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @Column({ length: 20 })
    status: string;

    @OneToMany(()=>Details_cart,(detail_cart)=>detail_cart.cart)
    detail_cart:Details_cart[]

    @ManyToOne(()=>User,(user)=>user.car)
    @JoinColumn({
        name:'user_id'
    })
    user:User

    @CreateDateColumn({ type: 'timestamp' })
    createdAt2: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}