let titleName = 'Criar conta';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import S from './styles';
import { ICreateUser } from '../../services/user/create-user.service';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../ultils/register';
import { Btn } from '../../components/button';

export function RegisterAccountPage() {
    React.useEffect(() => {
        document.title = titleName;
    }, []);

    const navigate = useNavigate();

    const [load, setLoad] = React.useState<boolean>(false);
    const [fistName, setFistName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const registerNewAccount = async (event: { preventDefault: () => void }) => {
        setLoad(true);
        event.preventDefault();

        const createUser = register.getInstance<ICreateUser>('create-user-service');
        const created = await createUser.perform({
            fistName,
            lastName,
            password,
            email,
        });

        if (created) {
            setLoad(false);
            return navigate('/login');
        }
        setLoad(false);
    };

    return (
        <>
            <ToastContainer />
            <S.Card>
                <S.form onSubmit={registerNewAccount}>
                    <S.Title>
                        <h3>Conta Azul</h3>
                        <label>
                            Explore um mundo de conveniência e segurança financeira.
                            Acesse sua conta pessoal com facilidade através da nossa tela
                            de login intuitiva. Suas finanças, sempre ao alcance de um
                            clique
                        </label>
                    </S.Title>
                    <label>Name: </label>
                    <input
                        onChange={(e) => setFistName(e.target.value)}
                        placeholder="Ex: Kaic"
                    />
                    <label>Sobrenome: </label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Ex: Mendes"
                    />
                    <label>email: </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: kaic@gmail.com "
                        type="email"
                    />
                    <label>Senha: </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    />
                    <S.Menu>
                        <Btn load={load}>Register</Btn>
                        <Link to={'/login'}>voltar</Link>
                    </S.Menu>
                </S.form>
            </S.Card>
        </>
    );
}
