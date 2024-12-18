import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="display-4">Page Not Found</h2>
            <p className="lead">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <NavLink to="/" className="btn btn-primary mt-3">
                Go Back Home
            </NavLink>
        </div>
    );
};

export default NotFound;