import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Deatils_order } from '../detail-order.entity';
import { Repository } from 'typeorm';
import { CreateDetailsOrderDto } from '../dto/create-detailsOrder.dto';
import { Product } from '../../products/producst.entity';
import { Order } from '../../orders/orders.entity';


@Injectable()
export class DetailsOrderService {
    constructor(
        @InjectRepository(Deatils_order)
        private details_orderRepository: Repository<Deatils_order>,

        @InjectRepository(Order)
        private orderRepository: Repository<Order>,

        @InjectRepository(Product)
        private productRepository: Repository<Product>

    ){}

    async createDetailsOrder(detailsOrder:CreateDetailsOrderDto): Promise<Deatils_order>{
        
        try {
            const newDeatilOrder= this.details_orderRepository.create(detailsOrder)
            if (detailsOrder.order_id) {
                const order= await this.orderRepository.findOne({
                    where:{id:detailsOrder.order_id}
                })
                if (!order) throw new HttpException("THE ORDER DON'T EXIST",HttpStatus.NOT_FOUND)
                newDeatilOrder.order=order
            }
            if (detailsOrder.product_id) {
                const product= await this.productRepository.findOne({
                    where:{id:detailsOrder.product_id}
                })
                if (!product) throw new HttpException("THE PRODUCT DON'T EXIST",HttpStatus.NOT_FOUND)
                newDeatilOrder.product=product
            }
            

            return this.details_orderRepository.save(newDeatilOrder)
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
