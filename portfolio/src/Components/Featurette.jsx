import { Link } from "react-router-dom";

const Featurette = () => {
    return (
        <div id="projects" className="container marketing">
            <h1 className="display-4 mb-4">Project Spotlight</h1>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-12 col-lg-5 order-2 order-lg-1 my-3">
                    <h2 className="featurette-heading fw-normal lh-1">Greater Grades <span className="text-body-secondary">Grading Application</span></h2>
                    <p className="lead">Greater Grades is a powerful and user-friendly tool designed to assist educational institutions in efficiently tracking and managing students, courses, assignments, and grades. Built with a modern tech stack, it provides a seamless experience for both educators and administrators to handle their grading tasks. The application allows for real-time updates, supports secure authentication via JWT, and features a responsive front-end for easy navigation and interaction.</p>
                    <p className="d-flex align-items-center justify-content-center"><Link to="/projects#grading" className="btn btn-lg btn-secondary">View Project</Link></p>
                </div>
                <div className="col-12 col-lg-7 order-1 order-lg-2 d-flex align-items-center justify-content-center my-3">
                    <img 
                        src="Images/GreaterGrades/dashboard.png" 
                        alt="Grading Home Page" 
                        className="img-fluid mx-auto object-fit-contain" 
                        aria-label="Placeholder: 500x500" 
                    />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-12 col-lg-5 order-md-2 my-3">
                    <h2 className="featurette-heading fw-normal lh-1">Drop Tables <span className="text-body-secondary">Social Media Platform</span></h2>
                    <p className="lead">Drop Tables is a social media platform designed to connect users through dynamic content sharing and interactive features. It allows users to create profiles, post updates, and engage with others through personalized feeds and real-time notifications. With a focus on user security and experience, it enables both private and public interactions, making it easy for users to stay connected. The platform is built with a modern tech stack, ensuring a smooth and scalable social experience.</p>
                    <p className="d-flex align-items-center justify-content-center"><Link to="/projects#social" className="btn btn-lg btn-secondary">View Project</Link></p>
                </div>
                <div className="col-12 col-lg-7 order-md-1 d-flex align-items-center justify-content-center my-3">
                    <img 
                        src="Images/DropTables/homepage.png" 
                        alt="Social Medai Homepage" 
                        className="img-fluid mx-auto object-fit-contain" 
                        aria-label="Placeholder: 500x500" 
                    />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-12 col-lg-5 order-2 order-lg-1 my-3">
                    <h2 className="featurette-heading fw-normal lh-1">Surviving the Silent City <span className="text-body-secondary">Adventure Game</span></h2>
                    <p className="lead">Surviving the Silent City is a thrilling choose-your-own-adventure game set in a mysterious, abandoned city. Players navigate dangerous environments, make critical decisions, and explore hidden secrets to stay alive. With branching storylines and multiple endings, every choice impacts the fate of the character, providing a unique and immersive experience in a post-apocalyptic setting.</p>
                    <p className="d-flex align-items-center justify-content-center"><Link to="/projects#cyoa" className="btn btn-lg btn-secondary">View Project</Link></p>
                </div>
                <div className="col-12 col-lg-7 order-1 order-lg-2 d-flex align-items-center justify-content-center my-3">
                    <img 
                        src="Images/SilentCity/mainmenu.png" 
                        alt="Game Menu" 
                        className="img-fluid mx-auto object-fit-contain" 
                        aria-label="Placeholder: 500x500" 
                    />
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    )
}

export default Featurette;