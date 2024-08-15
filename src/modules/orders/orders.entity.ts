import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Deatils_order } from '../details_order/detail-order.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_date: string;

  @Column()
  status: boolean;

  @Column()
  payment: string;

  @Column()
  total: number;

  @Column()
  shipment_dereccion: string;

  @ManyToOne(() => User, (user) => user.orders) // Se referencia al campo "orders" en la entidad "User"
  user: User; // Cada pedido pertenece a un solo usuario

  @OneToMany(()=>Deatils_order,(details_order)=>details_order)
  details_order:Deatils_order[]
}
