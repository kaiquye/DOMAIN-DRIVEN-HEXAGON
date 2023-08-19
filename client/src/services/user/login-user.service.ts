import { AdapterService } from "../../ultils/adapter";
import { SuccessNotification } from "../../ultils/notifications";
import { EStorageTypes } from "../../ultils/types/storage.types";
import { apiBase } from "../api";

interface ILoginIn {
    email: string;
    password: string;
}

interface ILoginOut {
    id: string;
    email: string;
}

export type ILoginUser = AdapterService<ILoginIn, ILoginOut>

class LoginUser implements ILoginUser {
    async perform(data: ILoginIn): Promise<ILoginOut> {
        const success = await apiBase.post("/user/login", data);
        if (success) {
            SuccessNotification({
                message: "Bem-vindo de volta!"
            })
            const { payload } = success.data;
            console.log(payload)
            localStorage.setItem(EStorageTypes.ACCESS_TOKEN, payload.data.accessToken)
            localStorage.setItem(EStorageTypes.USER_ID, payload.data.id)
            return {
                email: payload.data.email,
                id: payload.data.id
            };
        }

        return null
    }
}

export default new LoginUser()
