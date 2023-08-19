import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import { RegisterAccountPage } from './pages/register-account';
import { NavBarComponent } from './components/navBar';
import { LoginPage } from './pages/login-account';
import { DashboardPage } from './pages/view-account';
import './services/index';

const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
    return <Outlet />;
};

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="app" element={<NavBarComponent />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path=":userId">
                        <Route path="register" element={<RegisterAccountPage />} />
                        <Route element={<ProtectedRoute user={false} />}>
                            <Route path="dashboard" element={<DashboardPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
