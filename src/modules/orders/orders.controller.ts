import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { CreateOrderDto } from './dto/create-order.tdo';
import { Order } from './orders.entity';

@Controller('orders')
export class OrdersController {
    constructor(
        private _orderService:OrdersService
    ){}

    @Post()
    async createOrder(@Body() order:CreateOrderDto): Promise<Order>{
        return this._orderService.createOrder(order)
    }
}
