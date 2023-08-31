import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from 'src/firebase/firebase.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from './user.model';

@Module({
  imports: [ConfigModule, MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, FirebaseService],
})
export class AuthModule {}
