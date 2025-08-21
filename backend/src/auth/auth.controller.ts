import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { RegisterResponseDTO,accessTokenDTO,AuthResponseDTO } from '../dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async sigIn(
        @Body('username') username: string,
        @Body('password') password: string
    ) : Promise<any> {
        return await this.authService.sigIn(username, password);
    }

    @Post('register')
    async register(@Body() registerData: RegisterResponseDTO): Promise<AuthResponseDTO> {
        return this.authService.register(registerData);
    }

    @Post('refresh')
    async refreshToken(
        @Body('refreshToken') refreshToken: string) : Promise<accessTokenDTO> {
            return this.authService.refreshToken(refreshToken);
        }


}
