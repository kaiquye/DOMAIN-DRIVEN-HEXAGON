import { Wallet } from '../wallet.model';
interface IProps {
  id: string;
  type: 'PIX' | 'TED' | 'TEF';
  from: Wallet;
  to: Wallet;
  status: 'SUCCESS' | 'FAIL';
  transactionDate: string;
}
export class PixTransferEvent {
  readonly eventName: string;
  readonly date: Date;
  readonly infos: IProps;
  constructor(props: IProps) {
    this.eventName = 'pix.transfer';
    this.date = new Date();
    this.infos = props;
  }
}
