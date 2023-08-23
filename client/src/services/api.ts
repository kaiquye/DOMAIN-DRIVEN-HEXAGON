import axios from "axios"
import { ErrorNotification } from "../ultils/notifications"
import { ErrorReference, IErrorReference } from "../ultils/error-reference"
import { EStorageTypes } from "../ultils/types/storage.types"
import { useRefreshToken } from "../hooks/useRefreshToken.hooks"

let defaultErrorMessage = "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde."
export const apiBase = axios.create({
    baseURL: "http://localhost:3000/v1"
})

apiBase.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem(EStorageTypes.ACCESS_TOKEN)
    return config
}, (error) => {
    ErrorNotification({ message: error.message });
    throw error;
})

apiBase.interceptors.response.use((response) => {
    return response
}, async (error) => {
    try {
        const config = error.config;
        const response = error.response.data
        const referenceError: IErrorReference = response?.error?.code ?? response?.error?.reference;
        if (referenceError === "resource.unauthorized" && !config.RETRY) {
            config.RETRY = true;
            const { accessToken } = await useRefreshToken();

            apiBase.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            return apiBase(config);
        }
        const message = ErrorReference[referenceError] || defaultErrorMessage;

        ErrorNotification({ message: message });
        return null
    } catch (error) {
        ErrorNotification({ message: defaultErrorMessage });
        return null
    }
})