import { Body, Controller ,Post , Get, Param, Put, Delete} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userservice: UserService) {}
    
   
    @Post()
    async addUser(@Body() user: UserDTO) {
        
       const userData = this.userservice.addUser(
            user.first_name,
            user.last_name,
            user.email,
            user.age )
        return userData;
    }

    @Get()
    getUsers() {
       return this.userservice.getUsers();
    }
    @Get(':userId')
    getUserById(
        @Param('userId') userId: string
    ) {
        return this.userservice.getUserById(userId);
    }

    @Put(':userId')
    updateUser(
        @Param('userId') userId:string ,
        @Body() user: UserDTO ) {
        return this.userservice.updateUser(
            userId,
            user.first_name,
            user.last_name,
            user.email,
            user.age)
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId:string) {
        return this.userservice.deleteUser(userId);
    }
}
