import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProtectedModule } from './protected/protected.module';
import { UploaderModule } from './uploader/uploader.module';

@Module({
  imports: [
    // UsersModule,
    // PostModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DATABASE'),
      }),
    }),
    ProtectedModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
