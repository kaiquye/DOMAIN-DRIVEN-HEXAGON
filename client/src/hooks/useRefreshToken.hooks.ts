import { apiBase } from "../services/api";
import { EStorageTypes } from "../ultils/types/storage.types";

interface IOutput {
    accessToken: string
}

export async function useRefreshToken(): Promise<IOutput> {
    const response = await apiBase.get("/user/refresh-token", {
        withCredentials: true
    })
    if (response?.data) {
        localStorage.setItem(EStorageTypes.ACCESS_TOKEN, response.data.accessToken)
        return {
            accessToken: response.data.accessToken
        }
    }

    return {
        accessToken: null
    }
}