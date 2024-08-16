import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartDetail {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // cartId: number;

    // @Column()
    // productId: number;

    @Column()
    quantity: number;

    @Column()
    unitPrice: number;
}
