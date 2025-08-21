import { IsEmail, IsString, MaxLength, MinLength, Matches } from 'class-validator';


export class AuthResponseDTO {
    accessToken: string;
    expiresIn: number;
}


export class RegisterResponseDTO {


    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    email: string;

  @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;


    @IsString()
    @MinLength(4)
    name : string;
    
    
    @IsString()
    @MinLength(4)
    lastName : string;


    

}