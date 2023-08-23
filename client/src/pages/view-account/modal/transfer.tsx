import React from 'react';
import { BtnDefault } from '../../../components/button/styled';
import { ITransferService } from '../../../services/wallet/transfer.service';
import register from '../../../ultils/register';
import S from './styled';
import Joi from 'joi';
import { InfoNotification } from '../../../ultils/notifications';
import { ToastContainer } from 'react-toastify';

const schema = Joi.object({
    accountNumber: Joi.string().min(3).max(11).messages({
        'string.min': 'O numero da conta muito curto',
        'string.max': 'O numero da conta muito longo',
    }),
    accountDigit: Joi.string().min(3).max(11).messages({
        'string.min': 'Digito da conta muito curto',
        'string.max': 'Digito da conta muito longo',
    }),
});

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
        const { error } = schema.validate({
            accountDigit: accountDigit?.toString(),
            accountNumber: accountNumber?.toString(),
        });
        if (error) {
            return InfoNotification({ message: error.details[0].message });
        }

        const service = register.getInstance<ITransferService>('transfer-service');
        if (accountNumber && accountDigit && amount) {
            await service.perform({
                amount,
                receiver: { accountDigit, accountNumber },
            });
            setTimeout(() => window.location.reload(), 200);
        }
    };

    const closeModal = () => {
        setViewAmount(false);
        props.setModalOpen(false);
    };

    return (
        <>
            <ToastContainer />
            {props.isOpen == true ? (
                <S.ModalOverlay>
                    <S.Modal>
                        {!viewAmount ? (
                            <>
                                <S.icon />
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
                                <S.icon />
                                <S.Title>Valor da Transferência</S.Title>
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
