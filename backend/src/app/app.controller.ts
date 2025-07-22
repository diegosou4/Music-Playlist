import { Controller, Get, Body, Post } from '@nestjs/common';
import { User } from 'generated/prisma';
import { CreateUserDto } from '../dto/create-user.dto';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private AppService: AppService) {}



@Get('users')
async getHello(): Promise<User[]> {
  return this.AppService.getUsers();
}


@Post('register')
async registerUser(@Body() userData: CreateUserDto): Promise<User> {
  return this.AppService.registerUser(userData);
}


}