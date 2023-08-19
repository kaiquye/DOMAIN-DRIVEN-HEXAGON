import register from "../ultils/register";
import createUserService from "./user/create-user.service";
import loginUserService from "./user/login-user.service";
import getWalletDetailsService from "./wallet/get-wallet-details.service";
import transferService from "./wallet/transfer.service";

register.register('login-user-service', loginUserService);
register.register('create-user-service', createUserService);
register.register('get-wallet-service', getWalletDetailsService);
register.register('transfer-service', transferService);

