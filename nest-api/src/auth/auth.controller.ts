import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/dto/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: Pick<User, 'email' | 'password'>){
    return this.authService.login(body.email, body.password);
    // return '[TEST]: Login'
  }
  @Post('register')
  register(@Body() body: Omit<User, 'id'>){
    return this.authService.register(body);
    // return '[TEST]: Registro'

  }
@Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.authService.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
