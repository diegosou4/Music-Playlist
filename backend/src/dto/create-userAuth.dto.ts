
import { IsString, IsEmail, MinLength, MaxLength} from 'class-validator';


export class CreateUserAuthDto {
    
    
    @MinLength(6)
    @MaxLength(20)
    password!: string;
    
    @IsEmail()
    email!: string;

    @IsString()
    username!: string;

}