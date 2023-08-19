import { IsUUID } from 'class-validator';

export class FindWalletDto {
  @IsUUID()
  userId: string;
}
