import { Route, Routes, BrowserRouter, Outlet, useNavigate } from 'react-router-dom';
import { RegisterAccountPage } from './pages/register-account';
import { NavBarComponent } from './components/navBar';
import { LoginPage } from './pages/login-account';
import { DashboardPage } from './pages/view-account';
import { EStorageTypes } from './ultils/types/storage.types';
import './services/index';
import React from 'react';

const RequireAuth = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem(EStorageTypes.ACCESS_TOKEN);
    if (user) {
        return <Outlet />;
    }
    React.useEffect(() => {
        navigate('/login');
    }, []);
};

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<NavBarComponent />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterAccountPage />} />
                    <Route element={<RequireAuth />}>
                        <Route path=":userId">
                            <Route path="dashboard" element={<DashboardPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
