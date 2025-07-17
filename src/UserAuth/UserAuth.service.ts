
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserAuth } from 'generated/prisma';
import { CreateUserAuthDto } from 'src/dto/create-userAuth.dto';

@Injectable()
export class UserAuthService {
    constructor(private prisma: PrismaService) {}


    async getUsers(): Promise<UserAuth[]> {
        if (!this.prisma.userAuth) {
            throw new Error('UserAuth model is not defined on PrismaService');
        }
        const users = await this.prisma.userAuth.findMany();
        return users;
    }

    async createUser(userAuthData: CreateUserAuthDto): Promise<UserAuth> {
        if (!this.prisma.userAuth) {
            throw new Error('UserAuth model is not defined on PrismaService');
        }
        const userAuth = await this.prisma.userAuth.create({
            data: {
            userId: userAuthData.userId,
            username: userAuthData.username,
            password: userAuthData.password, 
            email: userAuthData.email
        },
      });
        return userAuth;
    }

}