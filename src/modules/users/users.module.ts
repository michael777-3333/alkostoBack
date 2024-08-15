import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Order } from '../orders/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Order])],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[] //exportar los servicios
})
export class UsersModule {}
