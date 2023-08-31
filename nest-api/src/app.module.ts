import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { FirebaseService } from './firebase/firebase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://jciro1984:4xxL52jYt99rwTFI@cluster0.lzsphdt.mongodb.net/?retryWrites=true&w=majority',
    ),
    PostsModule,
    AuthModule,
  ],
  providers: [FirebaseService],
})

export class AppModule {}
