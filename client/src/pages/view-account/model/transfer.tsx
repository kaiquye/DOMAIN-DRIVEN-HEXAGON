import React from 'react';
import { BtnDefault } from '../../../components/button/styled';
import { ITransferService } from '../../../services/wallet/transfer.service';
import register from '../../../ultils/register';
import S from './styled';

interface IProps {
    isOpen: boolean;
    isClose: boolean;
    setModalOpen: (value: boolean) => void;
}

export function TransferModal(props: IProps) {
    const [viewAmount, setViewAmount] = React.useState<boolean>(false);
    const [amount, setAmount] = React.useState(null);
    const [accountNumber, setAccountNumber] = React.useState<number | null>(null);
    const [accountDigit, setAccountDigit] = React.useState<number | null>(null);

    const transfer = async () => {
        const service = register.getInstance<ITransferService>('transfer-service');
        if (accountNumber && accountDigit && amount) {
            await service.perform({
                amount,
                receiver: { accountDigit, accountNumber },
            });
            setTimeout(() => window.location.reload(), 100);
        }
    };

    const closeModal = () => {
        setViewAmount(false);
        props.setModalOpen(false);
    };

    return (
        <>
            {props.isOpen == true ? (
                <S.ModalOverlay>
                    <S.Modal>
                        {!viewAmount ? (
                            <>
                                <S.Title>Nova Transferência</S.Title>
                                <label>Digite o numero da conta</label>
                                <S.Input
                                    onChange={({ target }) =>
                                        setAccountNumber(Number(target.value))
                                    }
                                    type="number"
                                    placeholder="Exemplo: 62303.0"
                                />
                                <label>Digito</label>
                                <S.Input
                                    onChange={({ target }) =>
                                        setAccountDigit(Number(target.value))
                                    }
                                    type="number"
                                    placeholder="Exemplo: 35104.0"
                                />
                            </>
                        ) : (
                            <>
                                <label>Valor</label>
                                <div>
                                    R$:
                                    <S.Input
                                        onChange={({ target }) =>
                                            setAmount(target.value.toString())
                                        }
                                        placeholder="Exemplo: 10,00"
                                    />
                                </div>
                            </>
                        )}
                        <S.Menu>
                            <BtnDefault onClick={() => closeModal()}>Cancelar</BtnDefault>{' '}
                            {!viewAmount ? (
                                <BtnDefault
                                    color={true}
                                    onClick={async () => await setViewAmount(true)}
                                >
                                    próximo
                                </BtnDefault>
                            ) : (
                                <BtnDefault
                                    color={true}
                                    onClick={async () => await transfer()}
                                >
                                    Transferir
                                </BtnDefault>
                            )}
                        </S.Menu>
                    </S.Modal>
                </S.ModalOverlay>
            ) : null}
        </>
    );
}
