import { IsEmail, IsString, MaxLength, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDTO {
    accessToken: string;
    refreshToken: string;
}

export class accessTokenDTO {
    accessToken: string;
}


export class RegisterResponseDTO {

    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @ApiProperty()
    @IsEmail()
    email: string;
  
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    @ApiProperty()
    @IsString()
    @MinLength(4)
    name : string;
    
    @ApiProperty()
    @IsString()
    @MinLength(4)
    lastName : string;
}