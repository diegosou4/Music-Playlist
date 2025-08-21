
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserAuth } from 'generated/prisma';
import { RegisterResponseDTO } from 'src/dto/auth.dto';
import * as bcrypt from 'bcrypt';


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

    async createUser(userAuthData: RegisterResponseDTO): Promise<UserAuth> {
                if (!this.prisma.userAuth) {
                    throw new Error('UserAuth model is not defined on PrismaService');
                }

                const existingEmail = await this.findByEmail(userAuthData.email);
                if (existingEmail) throw new Error('Email already exists');

                const existingUsername = await this.findByUsername(userAuthData.username);
                if (existingUsername) throw new Error('Username already exists');

                const hashPass = await bcrypt.hash(userAuthData.password, 10);

                try {
                    const user = await this.prisma.user.create({
                        data: {
                            name: userAuthData.name,
                            lastName: userAuthData.lastName,
                        },
                    });
                    const userAuth = await this.prisma.userAuth.create({
                        data: {
                            username: userAuthData.username,
                            password: hashPass,
                            email: userAuthData.email,
                            userId: user.id,
                        },
                    });

                    return userAuth;
                } catch (error) {
                    console.error('Error creating user:', error);
                    throw new Error('Error creating user');
                }
            }


    async findByEmail(email: string): Promise<UserAuth | null> {
        const user = await this.prisma.userAuth.findUnique({
            where: { email: email },
        });
        return user;
    }

    async findByUsername(username: string): Promise<UserAuth | null> {
        const user = await this.prisma.userAuth.findUnique({
            where: { username: username },
        });
        return user;
    }

}