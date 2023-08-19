import S from './styled';
import { Container, Skeleton } from '../../components/container.styles';
import { SideBar } from '../../components/sidebar';
import { BtnDefault } from '../../components/button/styled';
import React from 'react';
import register from '../../ultils/register';
import { IGetWalletDetails } from '../../services/wallet/get-wallet-details.service';
import { IUser } from '../../structure/user.structure';
import { TransferModal } from './model/transfer';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { BalanceView } from '../../components/balance';

export function DashboardPage() {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<IUser | null>(null);
    const { userId } = useParams();

    const getWalletDetails = async () => {
        if (userId) {
            const getWalletService =
                register.getInstance<IGetWalletDetails>('get-wallet-service');
            const response = await getWalletService.perform({
                userId: userId,
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
    }, [userId]);

    return (
        <>
            <ToastContainer />
            {user !== null ? (
                <Container>
                    <TransferModal
                        setModalOpen={setModalOpen}
                        isOpen={modalOpen}
                        isClose={modalOpen}
                    />
                    <SideBar />
                    <S.Container>
                        <S.Banner>
                            <S.BannerUserInfo>
                                <div>
                                    <h2>Olá, {user?.fistName}!</h2>
                                    <label>
                                        <strong>Numero da conta:</strong>{' '}
                                        {user.wallets[0].accountNumber}{' '}
                                        <strong>Digito:</strong>{' '}
                                        {user.wallets[0].accountDigit}
                                    </label>
                                </div>
                            </S.BannerUserInfo>
                            <S.BannerAppInfo>
                                <div>
                                    <label>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Officia voluptatibus.
                                    </label>
                                </div>
                            </S.BannerAppInfo>
                        </S.Banner>
                        <S.Details>
                            <S.Payments>
                                <S.PaymentsBalance>
                                    <h3>Saldo do conta azul</h3>
                                    <BalanceView userId={userId} />
                                    <S.Opts>
                                        <BtnDefault>Extrato</BtnDefault>
                                        <BtnDefault onClick={() => setModalOpen(true)}>
                                            Transferência
                                        </BtnDefault>
                                    </S.Opts>
                                </S.PaymentsBalance>{' '}
                                <S.PaymentsBalance>
                                    <p>Atividades recentes</p>
                                    <label>
                                        Aqui estão algumas das atividades mais recentes em
                                        sua conta simples. Fique atento a qualquer
                                        transação que você não reconheça.
                                    </label>
                                    <S.Opts>
                                        <BtnDefault>Ver atividades</BtnDefault>
                                    </S.Opts>
                                </S.PaymentsBalance>
                            </S.Payments>
                            <S.Menu>
                                <S.MenuDetails>
                                    <label>
                                        <img
                                            width="30px"
                                            src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                        />
                                        Enviar
                                    </label>
                                    <label>
                                        <img
                                            width="30px"
                                            src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                        />
                                        Solicitar
                                    </label>
                                    <label>
                                        <img
                                            width="30px"
                                            src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                        />
                                        Mais
                                    </label>
                                    <Skeleton width="20%" height="240px" />
                                </S.MenuDetails>
                            </S.Menu>
                        </S.Details>
                    </S.Container>
                </Container>
            ) : (
                <>
                    <Container>
                        <SideBar />
                        <S.Container>
                            <S.Banner>
                                <S.BannerUserInfo>
                                    <div>
                                        <Skeleton width="20%" height="20px" />
                                        <Skeleton width="80%" height="20px" />
                                    </div>
                                </S.BannerUserInfo>
                                <S.BannerAppInfo>
                                    <div>
                                        <label>
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit. Officia voluptatibus.
                                        </label>
                                    </div>
                                </S.BannerAppInfo>
                            </S.Banner>
                            <S.Details>
                                <S.Payments>
                                    <S.PaymentsBalance>
                                        <h3>Saldo do conta azul</h3>
                                        <BalanceView userId={userId} />
                                        <S.Opts>
                                            <BtnDefault>Extrato</BtnDefault>
                                            <BtnDefault>Transferência</BtnDefault>
                                        </S.Opts>
                                    </S.PaymentsBalance>{' '}
                                    <S.PaymentsBalance>
                                        <p>Atividades recentes</p>
                                        <label>
                                            Aqui estão algumas das atividades mais
                                            recentes em sua conta simples. Fique atento a
                                            qualquer transação que você não reconheça.
                                        </label>
                                        <S.Opts>
                                            <BtnDefault>Ver atividades</BtnDefault>
                                        </S.Opts>
                                    </S.PaymentsBalance>
                                </S.Payments>
                                <S.Menu>
                                    <S.MenuDetails>
                                        <label>
                                            <img
                                                width="30px"
                                                src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                            />
                                            Enviar
                                        </label>
                                        <label>
                                            <img
                                                width="30px"
                                                src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                            />
                                            Solicitar
                                        </label>
                                        <label>
                                            <img
                                                width="30px"
                                                src="https://icon-library.com/images/invoice-icon/invoice-icon-4.jpg"
                                            />
                                            Mais
                                        </label>
                                    </S.MenuDetails>
                                </S.Menu>
                            </S.Details>
                        </S.Container>
                    </Container>
                </>
            )}
        </>
    );
}
