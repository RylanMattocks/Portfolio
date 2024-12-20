import { useLocation } from "react-router-dom";
import Carousel from "../Components/Carousel";
import { useEffect, useState } from "react";

const Projects = () => {
    const { hash } = useLocation();
    const [ projectVisibility, setProjectVisibility] = useState({
        grading: false,
        social: false,
        cyoa: false,
        weather: false,
        api: false,
        chatbot: false,
        routing: false
    });

    const toggleDetailView = (projectName) => {
        if (projectVisibility[projectName] === true) {
            const section = document.getElementById(projectName);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setProjectVisibility((prevState) => ({
            ...prevState,
            [projectName]: !prevState[projectName]
        }))
    };

    const toggleDetailOn = (projectName) => {
        setProjectVisibility((prevState) => {
            const newState = {};
            // Loop through all previous project states and set them to false
            Object.keys(prevState).forEach((key) => {
                newState[key] = key === projectName ? true : false;
            });
            return newState;
        });
    }; 

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                toggleDetailOn(hash.slice(1));
            }
        }
    }, [hash])

    return (
        <>
            <Carousel />
            <div className="container-fluid mt-5">
                <h1 className="display-4 text-center mb-5">My Projects</h1>

                <hr id="grading" className="featurette-divider my-5" />

                {/* Grading Application */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Greater Grades: Grading Application</strong></h2>
                        <p className="lead">A comprehensive app for educational institutions, built with .NET Core, React, and deployed on Azure.</p>
                        <p>Includes features like secure user authentication via JWT tokens, class management with CRUD operations, address validation using the Shippo API, and responsive frontend built with React. The backend is powered by .NET Web API and Entity Framework Core for seamless database interactions. The application is deployed on Azure for scalability, with unit testing using xUnit to ensure reliability.</p>
                        
                        {projectVisibility.grading && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>Greater Grades is a comprehensive web application designed to help educational institutions efficiently manage classes, students, teachers, assignments, and grades. The backend is powered by .NET Web API, with C# for robust logic and Entity Framework Core (EF Core) for seamless database interaction. The system is hosted on Microsoft Azure, ensuring scalability and reliability, while also implementing RESTful principles to create a clean API.</p>
                                
                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Authentication & Authorization:</strong> Utilizes JWT tokens for secure user authentication and authorization across endpoints.</li>
                                    <li><strong>CRUD Operations:</strong> Users can create, read, update, and delete data related to classes, students, teachers, and assignments via RESTful API endpoints.</li>
                                    <li><strong>Address Validation:</strong> Integration with the Shippo API for validating institution addresses during the registration process.</li>
                                    <li><strong>Frontend:</strong> Built using React, the frontend offers an intuitive user interface with interactive elements like clickable tiles and input fields, providing easy access to various data views.</li>
                                    <li><strong>Responsive Design:</strong> Fully responsive and accessible on a variety of devices, providing an optimal experience on both desktop and mobile.</li>
                                    <li><strong>Unit Testing:</strong> The project uses xUnit testing to ensure the reliability and correctness of the backend functionality.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>C# & .NET Web API</li>
                                    <li>Entity Framework Core for database interactions</li>
                                    <li>React for the frontend, with JavaScript and hooks for state management</li>
                                    <li>Azure Cloud for deployment and hosting</li>
                                    <li>JWT for authentication and authorization</li>
                                    <li>SQL Server for database management</li>
                                    <li>xUnit for unit testing and ensuring application stability</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The development of Greater Grades followed a structured process, starting with designing the backend API with RESTful principles, implementing user authentication with JWT, and creating endpoints for CRUD operations on the database. On the frontend, React was used to build components for managing and displaying user data, ensuring a dynamic and interactive experience. Key focus was placed on the security of user data and the reliability of the API, which is maintained through thorough testing with xUnit. Azure was chosen for its scalability, ensuring the application could handle growth in data and users.</p>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/GreaterGrades/classmenu.PNG" alt="Grading Application" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/GreaterGrades/dashboard.PNG" alt="Grading Application" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/GreaterGrades/studentmenu.PNG" alt="Grading Application" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-5 my-1" href="https://github.com/RylanMattocks/GreaterGrades" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <button className="btn btn-lg btn-secondary mx-5 my-1" onClick={() => toggleDetailView('grading')}>
                                {projectVisibility.grading ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="social" className="featurette-divider my-5" />

                {/* Social Media Platform */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Drop Tables: Social Media App</strong></h2>
                        <p className="lead">A social media platform built with C#, React, and deployed on Azure, featuring user login, profiles, and dynamic feeds.</p>
                        <p>Includes functionality for user registration, login, post creation, likes, follows, and personalized feeds. The backend is powered by SQL Server, C#, and Entity Framework Core, with unit testing using xUnit. The frontend is built using React, ensuring a responsive UI. The app is deployed on Azure with CI/CD automated via GitHub Actions for scalability.</p>
                    
                        {projectVisibility.social && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>Drop Tables: Social Media App is a dynamic platform designed for user engagement, enabling users to create and share posts, follow other users, and interact with posts through likes and follows. Built with C# and .NET Core for the backend, the application utilizes SQL Server and Entity Framework Core for database management. React is used for the frontend to provide an interactive and responsive user interface. The system is deployed on Microsoft Azure for scalability and reliability.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Authentication & Authorization:</strong> Secure login and registration functionality using JWT tokens for user authentication and authorization across endpoints.</li>
                                    <li><strong>User Profiles:</strong> Each user has a profile page displaying personal information, posts, and interactions with others (like/follow).</li>
                                    <li><strong>Post Creation & Interaction:</strong> Users can create posts, like posts, and follow other users. The platform allows users to unfollow and unlike posts that they've previously interacted with.</li>
                                    <li><strong>Dynamic Feed:</strong> The homepage displays posts from followed users, with a personalized feed for each user based on their follows.</li>
                                    <li><strong>Responsive Design:</strong> Fully responsive and designed for optimal display on both desktop and mobile devices.</li>
                                    <li><strong>Unit Testing:</strong> xUnit testing is used to ensure the backend's logic and business processes are functioning correctly and efficiently.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>C# & .NET Core for the backend API</li>
                                    <li>Entity Framework Core for database interactions</li>
                                    <li>SQL Server for managing user and post data</li>
                                    <li>React for the frontend, JavaScript, and hooks for state management</li>
                                    <li>JWT for user authentication and authorization</li>
                                    <li>Microsoft Azure for deployment and hosting</li>
                                    <li>xUnit for unit testing and ensuring backend reliability</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The development of Drop Tables: Social Media App started with designing the backend API using .NET Core and integrating SQL Server and Entity Framework Core for efficient database management. Authentication was implemented using JWT for secure user login and registration. On the frontend, React was used to build a dynamic user interface, where users can interact with posts and follow other users. The platform ensures a seamless experience with responsive design for both desktop and mobile users. The application was thoroughly tested using xUnit, and deployed on Microsoft Azure for high scalability and performance.</p>
                            </div>
                        )}
                    
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/DropTables/followpage.PNG" alt="Social Media Follows Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/DropTables/homepage.PNG" alt="Social Media Home Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/DropTables/profilepage.PNG" alt="Social Media Profile Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-5 my-1" href="https://github.com/RylanMattocks/SocialMediaApp" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <button className="btn btn-lg btn-secondary mx-5 my-1" onClick={() => toggleDetailView('social')}>
                                {projectVisibility.social ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="cyoa" className="featurette-divider my-5" />

                {/* CYOA Game */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Adventure Game: Interactive Dialogue Game</strong></h2>
                        <p className="lead">An interactive adventure game with over 100 dialogue options, featuring multiple branching storylines and dynamic outcomes based on player decisions. The game is powered by a C# API and utilizes a hosted database to manage user data and save states.</p>
                        <p>Designed with a directed graph structure to manage story progression, the game offers a highly replayable experience. Dialogue nodes are stored in a JSON file, enabling efficient storage and scalability. Players can make decisions that directly impact their character's journey, with the ability to save and load progress, further enhancing user engagement. The backend is containerized using Docker, and the project is hosted on Microsoft Azure, ensuring scalability and reliability.</p>

                        {projectVisibility.cyoa && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>Branching Adventures: Interactive Dialogue Game is a captivating adventure where players make choices that shape the narrative. The game features over 100 dialogue options, allowing players to navigate through various paths and experience different outcomes. The dialogue is structured as a directed graph, with each node representing a dialogue choice, and the nodes are linked through unique IDs. The game is built to enhance replayability, enabling users to revisit and explore different branches of the story.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Interactive Dialogue:</strong> Over 100 dialogue options that allow players to make decisions influencing their character's story.</li>
                                    <li><strong>Branching Storylines:</strong> Multiple paths and outcomes ensure the game remains fresh and engaging on each playthrough.</li>
                                    <li><strong>Directed Graph Structure:</strong> Story nodes and links are managed using a directed graph stored in a JSON file for scalability and dynamic dialogue flow.</li>
                                    <li><strong>Save & Load Feature:</strong> Players can save their progress and load saved data to resume the game, offering an enhanced user experience.</li>
                                    <li><strong>Replayability:</strong> Each decision impacts the story, encouraging players to explore different choices and outcomes across multiple playthroughs.</li>
                                    <li><strong>Backend API:</strong> Built using C#, the backend handles game logic, user data, and save states, with endpoints for storing and retrieving player progress.</li>
                                    <li><strong>Hosted Database:</strong> A cloud-based database stores user data and save states, allowing for persistence across sessions and multiple devices.</li>
                                    <li><strong>Dockerized Backend:</strong> The backend API is containerized using Docker, ensuring consistency and scalability across environments.</li>
                                    <li><strong>CI/CD Pipeline:</strong> Automated deployment and testing through a CI/CD pipeline powered by GitHub Actions.</li>
                                    <li><strong>Cloud Hosting:</strong> The entire application is hosted on Microsoft Azure, ensuring reliability, scalability, and global access.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>C# & .NET Core for the backend API</li>
                                    <li>Entity Framework Core for database interactions</li>
                                    <li>SQL Server or other hosted databases for storing user and save data</li>
                                    <li>JSON for storing dialogue options and game state</li>
                                    <li>Directed graph structure to represent story progression</li>
                                    <li>Docker for containerizing the backend API</li>
                                    <li>GitHub Actions for CI/CD pipeline and automated testing</li>
                                    <li>Microsoft Azure for deployment and hosting</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The development of Branching Adventures: Interactive Dialogue Game began with the creation of a dynamic dialogue system that allows for branching storylines. The directed graph structure was implemented to efficiently manage the flow of dialogue, with each node containing a dialogue option and unique ID linking to other story points. JSON parsing was used to load and store story data, making it easy to scale the game for future expansions. The save and load feature was added to enhance user engagement by allowing players to preserve their progress. The backend API was built with C# and integrated with a cloud-based database for persistent user data storage. The entire backend was containerized using Docker for easier deployment, and a CI/CD pipeline was established using GitHub Actions for seamless deployment and testing. Finally, the game was hosted on Microsoft Azure, ensuring scalability and performance.</p>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/SilentCity/mainmenu.PNG" alt="Adventure Game" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/SilentCity/game.PNG" alt="Adventure Game" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/SilentCity/escapemenu.PNG" alt="Adventure Game" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-3 my-1" href="https://github.com/RylanMattocks/CYOA_WEBAPP" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <a className="btn btn-lg btn-secondary mx-3 my-1" href="https://ashy-hill-0c538970f.4.azurestaticapps.net/login" target="_blank" rel="noopener noreferrer">Live Site</a>                        
                            <button className="btn btn-lg btn-secondary mx-3 my-1" onClick={() => toggleDetailView('cyoa')}>
                                {projectVisibility.cyoa ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="weather" className="featurette-divider my-5" />

                {/* Weather Prediction */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Weather Predictor: Python Application</strong></h2>
                        <p className="lead">A Python-based weather prediction application utilizing linear regression for accurate forecasts, with a secure login system and a user-friendly UI for interactive temperature visualizations.</p>
                        <p>Leveraging historical weather data, the application uses linear regression to predict future weather trends. It includes a secure login system with SQL for database management and Hashlib for password encryption. The UI is designed for simplicity, with dropdown menus, sliders, and buttons for easy interaction. Temperature predictions are displayed through interactive graphs, providing users with detailed insights through mouseover functionality.</p>
                    
                        {projectVisibility.weather && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>Weather Predictor is an intuitive Python application that predicts weather trends using linear regression. The app leverages historical weather data to provide accurate forecasts, offering users a visual representation of temperature predictions. The backend uses SQL for database management, with a secure login system powered by Hashlib for encrypted password storage.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Weather Prediction:</strong> Uses linear regression to forecast weather trends based on historical temperature data, providing accurate and reliable predictions.</li>
                                    <li><strong>Secure Login System:</strong> Implements SQL for user data management and Hashlib for secure password encryption, ensuring data privacy.</li>
                                    <li><strong>Interactive Graphs:</strong> Temperature data is presented in a graphical format using Altair, with mouseover functionality to display detailed temperature information.</li>
                                    <li><strong>Intuitive UI:</strong> Designed with Streamlit for an easy-to-use interface, featuring dropdown menus, buttons, and sliders for user input.</li>
                                    <li><strong>Responsive Design:</strong> Optimized for an interactive and responsive experience across devices.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>Python for the core application</li>
                                    <li>Streamlit for the user interface</li>
                                    <li>Altair for interactive graph visualization</li>
                                    <li>NumPy and Pandas for data handling and analysis</li>
                                    <li>SQL for secure database management</li>
                                    <li>Hashlib for password encryption and security</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The development of Weather Predictor began with designing the backend logic using linear regression for weather prediction, leveraging historical data for model training. Streamlit was used to create an interactive and user-friendly interface, with Altair graphs visualizing the weather predictions. SQL and Hashlib ensured secure login and data management for users. The application was built with an emphasis on intuitive user interaction, responsive design, and accurate weather forecasting, providing a valuable tool for users seeking future weather insights.</p>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/Weather/login.PNG" alt="Login Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/Weather/prediction.PNG" alt="Prediction Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 my-1">
                        <img src="Images/Weather/monthly.PNG" alt="Monthly Page" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-3 my-1" href="https://github.com/RylanMattocks/CapstoneProject" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <a className="btn btn-lg btn-secondary mx-3 my-1" href="https://rylanmattocks-capstoneproject-wgumain-vdtcnu.streamlit.app/" target="_blank" rel="noopener noreferrer">Live Site</a>                                                                     
                            <button className="btn btn-lg btn-secondary mx-3 my-1" onClick={() => toggleDetailView('weather')}>
                                {projectVisibility.weather ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="api" className="featurette-divider my-5" />

                {/* School Roster API */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>School Roster API</strong></h2>
                        <p className="lead">A C# RESTful API built with ASP.NET Core and EF Core for managing users, courses, and their relationships with a secure SQL Server backend.</p>
                        <p>Developed using a code-first approach with EF Core to handle CRUD operations, ensuring efficient data management and secure user authentication. Implemented DTOs to optimize data transfer and prevent data loops. The API follows Service-Oriented Architecture (SOA) principles for better maintainability, with secure password hashing and salting techniques. Unit testing was done with xUnit, achieving 80% branch and code coverage for business logic.</p>

                        {projectVisibility.api && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>School Roster API is a robust and secure RESTful API designed to manage users, courses, and their relationships within a SQL Server backend. Built with C# using ASP.NET Core and Entity Framework Core, the application follows a code-first approach for database management and implements CRUD operations. It utilizes DTOs to ensure efficient data transfer and to prevent data loops, improving the performance of the application. The API is secured using password hashing and salting techniques, ensuring sensitive information is stored safely.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>CRUD Operations:</strong> Implements data creation, reading, updating, and deletion for managing users and courses in the system.</li>
                                    <li><strong>Data Transfer Optimization:</strong> Uses Data Transfer Objects (DTOs) to manage data and prevent data loops when fetching related data.</li>
                                    <li><strong>Secure User Authentication:</strong> Ensures secure storage of passwords using cryptographic hashing and salting techniques.</li>
                                    <li><strong>Service-Oriented Architecture (SOA):</strong> Separates business logic into services for better maintainability, scalability, and encapsulation.</li>
                                    <li><strong>Repository Pattern:</strong> Implements the repository pattern for database operations, ensuring separation of concerns and clean, maintainable code.</li>
                                    <li><strong>Unit Testing:</strong> xUnit testing was used to achieve 80% branch and code coverage, ensuring reliability and proper functionality of business logic.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>C# & ASP.NET Core for the backend API</li>
                                    <li>Entity Framework Core (EF Core) for database interactions</li>
                                    <li>SQL Server for the database backend</li>
                                    <li>DTOs for optimized data transfer and improved performance</li>
                                    <li>Hashing and salting for secure password storage</li>
                                    <li>Service-Oriented Architecture (SOA) for better separation of concerns</li>
                                    <li>Repository pattern for managing database operations</li>
                                    <li>xUnit for unit testing and ensuring code quality</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The development of the School Roster API started with defining the models and relationships between users and courses using the code-first approach in EF Core. CRUD endpoints were built to handle HTTP requests for creating, reading, updating, and deleting data. The project utilized DTOs to ensure efficient data transfer and to prevent potential loops during data retrieval. Password security was implemented using hashing and salting techniques, ensuring sensitive data is securely stored. Service-Oriented Architecture (SOA) principles were applied to maintain a modular and scalable codebase. Unit testing was performed using xUnit, achieving high code coverage and ensuring the correctness of business logic.</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="col-12 col-md-4 my-1 mx-auto">
                        <img src="Images/SchoolAPI/RosterERD.png" style={{ height: "100%", backgroundColor: "var(--bs-secondary-color)"}} alt="Roster ERD" className="img-fluid object-fit-contain py-1" />
                    </div>
                    <div className="col-12 col-md-4 my-1 mx-auto">
                        <img src="Images/SchoolAPI/RosterDocumentation.PNG" alt="Roster Documentation" className="img-fluid object-fit-contain" />
                    </div>
                    
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-5 my-1" href="https://github.com/RylanMattocks/WebRosterAPI" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <button className="btn btn-lg btn-secondary mx-5 my-1" onClick={() => toggleDetailView('api')}>
                                {projectVisibility.api ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="chatbot" className="featurette-divider my-5" />

                {/* Job Chatbot */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Career Path Chatbot</strong></h2>
                        <p className="lead">A chatbot developed with AIML and deployed via Pandorabots, designed to suggest software developer career paths based on user preferences.</p>
                        <p>The Career Path Chatbot helps users explore potential software development careers by asking them a series of questions about their interests and preferences. Using AIML, the chatbot guides users through a short survey to recommend one of five software developer career paths. Each career is accompanied by a brief description and a link to a detailed webpage for further exploration. Users can also opt to skip the survey and view all five careers at once.</p>

                        {projectVisibility.chatbot && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>The Career Path Chatbot is designed to help users navigate the world of software development careers. Developed using AIML (Artificial Intelligence Markup Language), the chatbot provides users with tailored career recommendations based on their answers to a few software-related questions. The chatbot can suggest careers based on preferences such as design vs. analysis, programming skills, problem-solving abilities, and whether the user prefers hardware or software creation. For those who prefer not to take the survey, the option to view all five suggested career paths is also available.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Career Path Suggestions:</strong> The chatbot suggests five software developer career paths based on a simple survey that asks users about their skills and preferences.</li>
                                    <li><strong>Survey Questions:</strong> Questions focus on areas like design vs. analysis, communication vs. problem-solving, and hardware vs. software development.</li>
                                    <li><strong>Option to View All Careers:</strong> Users can choose to bypass the survey and directly view all five career paths with descriptions.</li>
                                    <li><strong>Career Descriptions:</strong> Each career suggestion includes a brief description, helping users understand what each path entails.</li>
                                    <li><strong>External Links:</strong> The chatbot provides links to external resources for each career, allowing users to explore in-depth information.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>AIML for building the chatbot's conversational framework</li>
                                    <li>Pandorabots for deploying and hosting the chatbot</li>
                                    <li>Web technologies (HTML/CSS/JavaScript) for integrating the chatbot interface</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The Career Path Chatbot was created using AIML to design an interactive and user-friendly conversation flow. The chatbot uses predefined questions to gather information from the user, based on which it suggests one of five possible career paths. The deployment was handled via Pandorabots, ensuring the chatbot is accessible on the web. The project was developed with the goal of helping users make informed career decisions in the field of software development, while also providing the flexibility to explore multiple career paths without the need to complete the survey.</p>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 my-1 px-1">
                        <div className="ratio ratio-16x9 d-flex justify-content-center align-items-center">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <img src="Images/Chatbot/chatbotcareers.png" alt="Job Chatbot Careers" className="img-fluid object-fit-contain py-1"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-1 px-1">
                        <div className="ratio ratio-16x9 d-flex justify-content-center align-items-center" fill="var(--bs-secondary-color)">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <img src="Images/Chatbot/chatbotstart.png" alt="Job Chatbot Start" className="img-fluid object-fit-contain py-1"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-1 px-1">
                        <div className="ratio ratio-16x9 d-flex justify-content-center align-items-center">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <img src="Images/Chatbot/chatbotsuggestion.png" alt="Job Chatbot Suggestion" className="img-fluid object-fit-contain py-1"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-5 my-1" href="https://github.com/RylanMattocks/C951-Chatbot" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <button className="btn btn-lg btn-secondary mx-5 my-1" onClick={() => toggleDetailView('chatbot')}>
                                {projectVisibility.chatbot ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>

                <hr id="routing" className="featurette-divider my-5" />

                {/* Package Routing */}
                <div className="row featurette mb-4 mx-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Package Delivery Routing System</strong></h2>
                        <p className="lead">A routing system developed in Python to optimize package delivery using the nearest neighbor algorithm, designed to simulate a package delivery service similar to USPS.</p>
                        <p>The Package Delivery Routing System optimizes the delivery process by determining the most efficient route for multiple vehicles delivering packages. The system reads input from CSV files, which include package delivery deadlines, addresses, and distances between locations. The nearest neighbor algorithm is used to assign each vehicle to the nearest unvisited package location, ensuring that the total mileage for all vehicles combined stays under 140 miles. Special conditions, such as delayed packages, are also considered before the start of the deliveries.</p>

                        {projectVisibility.routing && (
                            <div className="mt-3">
                                <h3>Project Overview</h3>
                                <p>The Package Delivery Routing System was created to optimize the delivery of packages using a simple algorithm—the nearest neighbor technique. The system processes CSV files that contain package delivery information, including delivery deadlines, addresses, and distances between locations. The system is designed for three vehicles, each tasked with delivering packages. The total mileage driven by all vehicles combined is limited to under 140 miles. Special conditions, such as delayed packages, are handled by adjusting the start time or revisiting certain locations.</p>

                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Routing Optimization:</strong> The nearest neighbor algorithm is used to determine the most efficient delivery route for each vehicle.</li>
                                    <li><strong>CSV Input:</strong> The system reads CSV files containing package delivery details, including addresses, deadlines, and distances.</li>
                                    <li><strong>Special Conditions:</strong> Special conditions like delayed packages are considered before the delivery process starts.</li>
                                    <li><strong>Package Status Reporting:</strong> Users can check the status of a package at a given time or for all packages at the end of the day.</li>
                                    <li><strong>Limited Mileage:</strong> The total mileage of all vehicles combined is constrained to under 140 miles.</li>
                                </ul>

                                <h3>Technical Stack</h3>
                                <ul>
                                    <li>Python for system implementation</li>
                                    <li>CSV for input data (addresses, deadlines, distances)</li>
                                    <li>Nearest neighbor algorithm for route optimization</li>
                                    <li>Custom hashtable class for storing package data</li>
                                </ul>

                                <h3>Development Process</h3>
                                <p>The Package Delivery Routing System was developed using Python, with the nearest neighbor algorithm applied to optimize the delivery routes for three vehicles. CSV files are parsed to retrieve package details, and the algorithm assigns the closest delivery points to the vehicles. A custom hashtable class was implemented to efficiently store package information. The system also provides the capability to check the status of packages at any given time and ensures that the total mileage of all vehicles remains under 140 miles. This project was designed to simulate a real-world package delivery scenario similar to services like USPS.</p>
                            </div>
                        )}
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-md-3 text-center">
                        <p>
                            <a className="btn btn-lg btn-secondary mx-5 my-1" href="https://github.com/RylanMattocks/C950-Package-Delivery" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <button className="btn btn-lg btn-secondary mx-5 my-1" onClick={() => toggleDetailView('routing')}>
                                {projectVisibility.routing ? 'Show Less' : 'Learn More'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;