import './App.css'
import {lazy} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboarPage from "./pages/DashboardPage.jsx";
import Public from "./components/routes/Public.jsx";
import Private from "./components/routes/Private.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import UserInfoPage from "./pages/UserInfoPage.jsx";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {


    return (
        <Routes>
            <Route element={<Public/>}>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            <Route element={<Private/>}>
                <Route path="/" element={<Layout/>}>
                    <Route path="/dashboard" element={<DashboarPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/users/:id" element={<UserInfoPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
