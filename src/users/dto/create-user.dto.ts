import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  Length,
  IsNumberString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @Transform((params) => params.value.trim())
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  readonly nickname: string;

  @IsString()
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/)
  readonly password: string;

  @IsNumberString()
  @Length(6)
  readonly authCode: string;
}
