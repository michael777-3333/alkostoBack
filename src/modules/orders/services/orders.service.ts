import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../orders.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.tdo';
import { User } from 'src/modules/users/users.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,

        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async createOrder(order:CreateOrderDto): Promise<Order>{
        try {
            const newOrder= this.orderRepository.create(order)
            if (order.userId) {
                const user= await this.userRepository.findOne({
                    where:{id:order.userId}
                })
                if (!user) throw new HttpException("THE USER DONT'T EXIST",HttpStatus.NOT_FOUND)
                newOrder.user=user 
            }

            return this.orderRepository.save(newOrder) 
            
        } catch (error) {
            console.log(error);
            throw error
            
        }
    }
} 
