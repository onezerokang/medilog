import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RecordsController } from './records/records.controller';
import { RecordsService } from './records/records.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [UsersController, RecordsController],
  providers: [UsersService, RecordsService],
})
export class AppModule {}
