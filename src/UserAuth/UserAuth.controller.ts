import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { UserAuth } from 'generated/prisma';
import { CreateUserAuthDto } from 'src/dto/create-userAuth.dto';

@Controller('user-auth')
export class UserAuthController {
  constructor(private prisma: PrismaService) {}

  @Get('users')
  async getUsers() {
    if (!this.prisma.user) {
      throw new Error('User model is not defined on PrismaService');
    }
    const users = await this.prisma.user.findMany();
    return users;
  }

  @Post('create-user')
  async createUser(@Body() userAuthData: CreateUserAuthDto): Promise<UserAuth> {
    if (!this.prisma.user) {
      throw new Error('User model is not defined on PrismaService');
    }

    const user = await this.prisma.userAuth.create({
      data: {
        username: userAuthData.username,
        password: userAuthData.password,
        email: userAuthData.email,
      },
    });

    return user;
  }
}


