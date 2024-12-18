import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EmailModal from "./EmailModal";

const Header = () => {

    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-bs-theme') || 'dark');

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.getAttribute('data-bs-theme');
            setTheme(newTheme);
        })

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

        return () => observer.disconnect();
    }, []);


    return (
        <nav className={`navbar navbar-expand-md fixed-top ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Portfolio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/about">About Me</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/projects">Projects</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/experience">Experience</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="me-3 text-decoration-none btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#emailModal" aria-label="Open email modal">
                            <i className="bi bi-envelope fs-3" aria-hidden="true"></i>
                        </button>
                        <a href="https://www.linkedin.com/in/rylanmattocks/" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
                            <i className="bi bi-linkedin fs-3" aria-label="LinkedIn"></i>
                        </a>
                        <a href="http://github.com/RylanMattocks" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <i className="bi bi-github fs-3" aria-label="GitHub"></i>
                        </a>
                    </div>
                </div>
            </div>
            <EmailModal />
        </nav>
    )
}

export default Header;