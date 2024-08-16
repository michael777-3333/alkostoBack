import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // userId: number;

    @Column()
    createdAt: Date;

    @Column({ length: 20 })
    status: string;
}