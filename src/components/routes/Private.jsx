import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
    const isLogin = localStorage.getItem('token');

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default Private;