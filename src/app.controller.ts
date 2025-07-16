import { Controller, Get, Body, Post } from '@nestjs/common';
import { PrismaService } from './database/primas.service';
import { User } from 'generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('app')
export class AppController {
  constructor(private prisma : PrismaService) {
   
  }



@Get('users')
async getHello(): Promise<User[]> {
  if (!this.prisma.user) {
    throw new Error('User model is not defined on PrismaService');
  }
  const user = await this.prisma.user.findMany();
  return user;
}


@Post('register')
async registerUser(@Body() userData: CreateUserDto): Promise<User> {
  if (!this.prisma.user) {
    throw new Error('User model is not defined on PrismaService');
  }
  const user = await this.prisma.user.create({
    data: {
      name: userData.name,
      lastName: userData.lastName,
    },
  });
  return user;
 
}


}