import { AdapterService } from "../../ultils/adapter";
import { ErrorNotification, SuccessNotification } from "../../ultils/notifications";
import { EStorageTypes } from "../../ultils/types/storage.types";
import { apiBase } from "../api";

interface ITransferIn {
    amount: number
    receiver: {
        accountNumber: number,
        accountDigit: number
    }
}

interface ITransferOut {
    transferId: string
}

export type ITransferService = AdapterService<ITransferIn, ITransferOut>

class TransferService implements ITransferService {
    async perform(input: ITransferIn): Promise<ITransferOut> {
        console.log(input)
        const type = "pix";
        const userId = localStorage.getItem(EStorageTypes.USER_ID)
        const success = await apiBase.post(`/user/wallet/${type}/transfer/${userId}`, input)
        if (success) {
            const { payload } = success.data
            SuccessNotification(payload.data.message)
            return "";
        }
        return null
    }
}

export default new TransferService()