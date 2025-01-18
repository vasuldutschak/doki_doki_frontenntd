import {useLocation} from "react-router-dom";

function NotFoundPage() {
    const location = useLocation()

    return (
        <div key={location.pathname} className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Oops... The page you're looking for doesn't exist.</p>
            <a href="/" className="not-found-button">
                Go Back Home
            </a>
        </div>
    )
}

export default NotFoundPage;