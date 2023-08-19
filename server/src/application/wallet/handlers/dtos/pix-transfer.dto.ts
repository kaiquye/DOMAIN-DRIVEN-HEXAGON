import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PayerDtoParams {
  @IsUUID()
  id: string;
}
export class ReceiverDto {
  @IsNumber()
  accountNumber: number;
  @IsNumber()
  accountDigit: number;
}

export class PixTransferDto {
  @IsString()
  amount: number;
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @ValidateNested()
  @Type(() => ReceiverDto)
  receiver: ReceiverDto;
}
