import { AdapterService } from "../../ultils/adapter";
import { SuccessNotification } from "../../ultils/notifications";
import { apiBase } from "../api";

interface ICreateUserIn {
    email: string;
    fistName: string;
    lastName: string;
    password: string;
}

export type ICreateUser = AdapterService<ICreateUserIn, boolean>

class CreateUserService implements ICreateUser {
    async perform(data: ICreateUserIn): Promise<boolean> {
        const created = await apiBase.post("/user", {
            email: data.email,
            fistName: data.fistName,
            lastName: data.lastName,
            password: data.password
        })

        if (created) {
            setTimeout(() => {
                SuccessNotification({
                    message: "usuario criado com sucesso."
                })
            }, 10)
            return true;
        }
        return false
    }
}

export default new CreateUserService()
