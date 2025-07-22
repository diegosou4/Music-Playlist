import { Controller} from '@nestjs/common';
import { UserAuthService } from './UserAuth.service';
import { Get, Post, Body } from '@nestjs/common';
import { UserAuth } from 'generated/prisma';
import { CreateUserAuthDto } from 'src/dto/create-userAuth.dto';





@Controller('user-auth')
export class UserAuthController {
  
  constructor(private userAuthService: UserAuthService) {}

   @Get('users')
    async getUsers():  Promise<UserAuth[]> {
        return this.userAuthService.getUsers();
    }
  
    @Post('create-user')
    async createUser(@Body() userAuthData: CreateUserAuthDto): Promise<UserAuth> {
      const userAuth = await this.userAuthService.createUser(userAuthData);
  
      return userAuth;
    }

}


