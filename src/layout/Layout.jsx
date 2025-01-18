import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageLoader from "../loaders/PageLoader.jsx";
import Header from "../modules/header/Header.jsx";
import Footer from "../modules/footer/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Main from "../modules/main/Main.jsx";

function Layout(props) {

    return (
        <Suspense fallback={<PageLoader/>}>
            <Header/>
            <Sidebar/>
            <Main cssClasses="content-container">
                <Outlet/>
            </Main>
            <Footer />
        </Suspense>
    )
}


export default Layout;