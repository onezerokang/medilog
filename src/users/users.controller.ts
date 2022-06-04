import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getEnv() {
    return process.env.NODE_ENV;
  }
}
