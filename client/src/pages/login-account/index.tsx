import React from 'react';
import S from './styles';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../ultils/register';
import { ILoginUser } from '../../services/user/login-user.service';
import { ToastContainer } from 'react-toastify';
import { Btn } from '../../components/button';

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>(' ');
    const [load, setLoad] = React.useState<boolean>(false);

    const login = async (event: { preventDefault(): void }) => {
        setLoad(true);
        event.preventDefault();

        const loginUser = register.getInstance<ILoginUser>('login-user-service');
        const logged = await loginUser.perform({ email, password });
        if (logged) {
            setLoad(false);
            return navigate(`/app/${logged.id}/dashboard`);
        }
        setLoad(false);
    };

    return (
        <>
            <ToastContainer />
            <S.Card>
                <S.form onSubmit={login}>
                    <S.Title>
                        <h3>Conta Azul</h3>
                        <label>
                            Explore um mundo de conveniência e segurança financeira.
                            Acesse sua conta pessoal com facilidade através da nossa tela
                            de login intuitiva. Suas finanças, sempre ao alcance de um
                            clique
                        </label>
                    </S.Title>
                    <label>email: </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: kaic@gmail.com "
                        type="email"
                    />
                    <label>Senha: </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="***********"
                        type="password"
                    />
                    <S.Menu>
                        <Btn load={load}>Login</Btn>
                        <Link to={'/register'}>Register</Link>
                    </S.Menu>
                </S.form>
            </S.Card>
        </>
    );
}
