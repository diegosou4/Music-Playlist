import { Controller, Post, Body } from '@nestjs/common';
import { AuthResponseDTO } from '../dto/auth.dto';
import { AuthService } from './auth.service';
import { RegisterResponseDTO } from '../dto/auth.dto';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async sigIn(
        @Body('username') username: string,
        @Body('password') password: string
    ) : Promise<AuthResponseDTO> {
        return await this.authService.sigIn(username, password);
    }

    @Post('register')
    async register(@Body() registerData: RegisterResponseDTO): Promise<AuthResponseDTO> {
        return this.authService.register(registerData);


    }


}
