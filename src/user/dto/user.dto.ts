import { IsEmail,  IsNumber,  IsOptional, IsString } from 'class-validator';


export class UserDTO {

    @IsEmail()
    email: string;

    @IsString()
    first_name : string;

    @IsString()
    last_name : string;

    @IsOptional()
    @IsNumber()
    age : number;
}