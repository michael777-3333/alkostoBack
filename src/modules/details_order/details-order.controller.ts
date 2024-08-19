import { Body, Controller, Post } from '@nestjs/common';
import { CreateDetailsOrderDto } from './dto/create-detailsOrder.dto';
import { Deatils_order } from './detail-order.entity';
import { DetailsOrderService } from './services/details-order.service';

@Controller('details-order')
export class DetailsOrderController {
    constructor(private _deatil_orderServive:DetailsOrderService){}

    @Post()
    async createDetail_order(@Body() detailOrder:CreateDetailsOrderDto): Promise<Deatils_order>{
        return this._deatil_orderServive.createDetailsOrder(detailOrder)
    }
}
