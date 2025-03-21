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

    async getUsers(){
        try {
            // const users: User[] = [
            //     {
            //       id: 1,
            //       name: "Juan",
            //       lastname: "Pérez",
            //       cedula: "1001234567",
            //       email: "juan.perez@example.com",
            //       password: "password123",
            //       address: "Calle 123, Bogotá",
            //       phone: "3101234567",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 2,
            //       name: "María",
            //       lastname: "González",
            //       cedula: "1007654321",
            //       email: "maria.gonzalez@example.com",
            //       password: "maria456",
            //       address: "Carrera 45, Medellín",
            //       phone: "3207654321",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 3,
            //       name: "Carlos",
            //       lastname: "Ramírez",
            //       cedula: "1012345678",
            //       email: "carlos.ramirez@example.com",
            //       password: "carlos789",
            //       address: "Avenida 10, Cali",
            //       phone: "3112345678",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 4,
            //       name: "Ana",
            //       lastname: "Martínez",
            //       cedula: "1023456789",
            //       email: "ana.martinez@example.com",
            //       password: "ana123",
            //       address: "Calle 50, Barranquilla",
            //       phone: "3123456789",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 5,
            //       name: "Luis",
            //       lastname: "Hernández",
            //       cedula: "1034567890",
            //       email: "luis.hernandez@example.com",
            //       password: "luis456",
            //       address: "Carrera 30, Cartagena",
            //       phone: "3134567890",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 6,
            //       name: "Sofía",
            //       lastname: "Díaz",
            //       cedula: "1045678901",
            //       email: "sofia.diaz@example.com",
            //       password: "sofia789",
            //       address: "Avenida 80, Bucaramanga",
            //       phone: "3145678901",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 7,
            //       name: "Andrés",
            //       lastname: "López",
            //       cedula: "1056789012",
            //       email: "andres.lopez@example.com",
            //       password: "andres123",
            //       address: "Calle 20, Manizales",
            //       phone: "3156789012",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 8,
            //       name: "Gabriela",
            //       lastname: "Torres",
            //       cedula: "1067890123",
            //       email: "gabriela.torres@example.com",
            //       password: "gabriela456",
            //       address: "Carrera 12, Cúcuta",
            //       phone: "3167890123",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 9,
            //       name: "Fernando",
            //       lastname: "Gómez",
            //       cedula: "1078901234",
            //       email: "fernando.gomez@example.com",
            //       password: "fernando789",
            //       address: "Avenida 15, Pasto",
            //       phone: "3178901234",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     },
            //     {
            //       id: 10,
            //       name: "Elena",
            //       lastname: "Rojas",
            //       cedula: "1089012345",
            //       email: "elena.rojas@example.com",
            //       password: "elena123",
            //       address: "Calle 33, Ibagué",
            //       phone: "3189012345",
            //       orders: [],
            //       review: [],
            //       car: [],
            //       createdAt: new Date(),
            //       updatedAt: new Date(),
            //     }
            //   ];
              
            // users.forEach(async element => {
            //     const newUser = this.userRepository.create(element)
            //     await this.userRepository.save(newUser)
            // }); 

            console.log('finalizó');
            return await this.userRepository.find()
        } catch (error) {
            throw error
        }
    }
}
