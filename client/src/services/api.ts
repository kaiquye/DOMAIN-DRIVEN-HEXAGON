import axios from "axios"
import { ErrorNotification } from "../ultils/notifications"
import { ErrorReference, IErrorReference } from "../ultils/error-reference"
import { EStorageTypes } from "../ultils/types/storage.types"

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
}, (error) => {
    try {
        console.warn("erroro", error)
        const response = error.response.data
        const referenceError: IErrorReference = response?.error?.code ?? response?.error?.reference;
        const message = ErrorReference[referenceError] || "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.";

        ErrorNotification({ message: message });
        return null
    } catch (error) {
        console.log(error)
        ErrorNotification({ message: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde." });
        return null
    }
})