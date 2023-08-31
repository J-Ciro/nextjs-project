import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreatePostDto{
    @IsString()
    @IsNotEmpty()
    email:string;
    @IsString()
    @IsNotEmpty()
    photo:string;
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    description:string;
    @IsOptional()
    likes?:number;
}