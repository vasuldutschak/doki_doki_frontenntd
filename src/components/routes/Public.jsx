import { Navigate, Outlet } from 'react-router-dom';

const Public = () => {
    const isLogin = localStorage.getItem('token');

    if (isLogin) {
        return <Navigate to="/dashboard" />;
    }
    return <Outlet />;
};

export default Public;