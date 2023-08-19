export type IErrorReference = "USER.UNABLE_TO_ACTIVATE_USER" | "USER.UNABLE_TO_ACTIVATE_USER" |
    'USER.ALREADY_REGISTERED' | 'USER.NOT_FOUND' | 'WALLET.FAILED' | "WALLET.NOT.FOUND" | "USER.INVALID_EMAIL"

export enum ErrorReference {
    'USER.UNABLE_TO_ACTIVATE_USER' = "Não é possível ativar o usuário.",
    'USER.ALREADY_REGISTERED' = "Usuário já registrado.",
    'USER.NOT_FOUND' = "Usuário não encontrado.",
    'WALLET.FAILED' = "Operação na carteira falhou.",
    'TRANSACTION.FAILED' = "Transação falhou.",
    'WALLET.NOT.FOUND' = "Carteira não encontrada.",
    'USER.INVALID_EMAIL' = "E-mail informado não é válido.",
    "validation.error" = "Os dados informados não são válidos."
};
