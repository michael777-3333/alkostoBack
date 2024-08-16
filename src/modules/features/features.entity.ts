import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    productDetailId: number;
}