import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async createUser(user:CreateUserDto): Promise<User>{

       const userFound= await this.userRepository.findOne({
            where:{
                email:user.email
            }
        })

        const userFoundForCedula= await this.userRepository.findOne({
            where:{
                cedula:user.cedula
            }
        })

        if (userFound) throw new HttpException('THIS EMAIL ALREADY EXIST',HttpStatus.CONFLICT)
        if (userFoundForCedula) throw new HttpException('THIS USER ALREADY EXIST',HttpStatus.CONFLICT)

        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
}
