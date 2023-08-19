import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class InfoDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  transactionPassword: number;
}
export class CreateWalletDto {
  @IsString()
  eventName: string;
  @IsString()
  date: Date;
  @ValidateNested()
  @Type(() => InfoDto)
  infos: InfoDto;
}
