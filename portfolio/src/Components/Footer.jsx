import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0 px-4">
                    <a href="/" className="mx-2 text-body-secondary text-decoration-none lh-1">
                        <i className="bi bi-house-fill"></i>
                    </a>
                    <span className="text-body-secondary">© 2024 Rylan Mattocks</span>
                </div>

                <div className="col-12 col-md-4 text-center mb-3 mb-md-0 text-body-secondary">
                    Have a project or want to connect?{" "}<NavLink className="text-secondary text-decoration-none" to="/contact">Get in touch</NavLink>
                </div>

                <ul className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end list-unstyled mb-0 px-4">
                    <li className="mx-2"><a href="https://www.linkedin.com/in/rylanmattocks/" target="_blank" rel="noopener noreferrer" className="text-body-secondary" ><i className="bi bi-linkedin"></i></a></li>
                    <li className="mx-2"><a href="http://github.com/RylanMattocks" target="_blank" rel="noopener noreferrer" className="text-body-secondary" ><i className="bi bi-github"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;