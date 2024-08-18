import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(
        private _userService: UsersService
    ){}

    @Post()
    async createUser(@Body() user:CreateUserDto): Promise<User>{
       return this._userService.createUser(user)
    }
    
}
