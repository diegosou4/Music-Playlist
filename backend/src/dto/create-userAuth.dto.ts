
import { IsString, IsEmail, MinLength} from 'class-validator';


export class CreateUserAuthDto {
    @MinLength(6)
    password!: string;
    
    @IsEmail()
    email!: string;

    @IsString()
    username!: string;

    @IsString()
    userId!: string; 

}