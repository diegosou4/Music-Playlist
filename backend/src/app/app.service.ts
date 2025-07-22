import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { User } from 'generated/prisma';
import { CreateUserDto } from '../dto/create-user.dto';


@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    if (!this.prisma.user) {
      throw new Error('User model is not defined on PrismaService');
    }
    return this.prisma.user.findMany();
  }

  async registerUser(userData: CreateUserDto): Promise<User> {
    if (!this.prisma.user) {
      throw new Error('User model is not defined on PrismaService');
    }
    return this.prisma.user.create({
      data: {
        name: userData.name,
        lastName: userData.lastName,
      },
    });
  }



}