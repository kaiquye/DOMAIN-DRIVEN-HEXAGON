import React from 'react';
import S from './styled';
import { IGetWalletDetails } from '../../services/wallet/get-wallet-details.service';
import { IUser } from '../../structure/user.structure';
import register from '../../ultils/register';
import { Skeleton } from '../container.styles';

interface IProps {
    userId?: string;
}

export function BalanceView(data: IProps) {
    const [user, setUser] = React.useState<IUser | null>(null);

    const getWalletDetails = async () => {
        setUser(null);
        if (data.userId) {
            const getWalletService =
                register.getInstance<IGetWalletDetails>('get-wallet-service');
            const response = await getWalletService.perform({
                userId: data.userId,
            });

            setTimeout(() => {
                setUser(response);
            }, 1000);
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            await getWalletDetails();
        };

        fetchData();
    }, []);

    return (
        <S.Container>
            {user ? (
                <>
                    <h2>
                        {user.wallets[0].balance.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </h2>
                    <label>disponivel</label>
                    <button onClick={() => getWalletDetails()}>button</button>
                </>
            ) : (
                <>
                    <Skeleton width="40%" height="55px" />
                    <label>disponivel</label>
                </>
            )}
        </S.Container>
    );
}
