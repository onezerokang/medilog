import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RecordsController } from './records/records.controller';
import { RecordsService } from './records/records.service';

@Module({
  imports: [],
  controllers: [UsersController, RecordsController],
  providers: [UsersService, RecordsService],
})
export class AppModule {}
