const Skills = () => {
    return (
        <div id="skills" className="container marketing my-5">
            <h1 className="display-4 mb-4">Skills</h1>
            <div className="row ">
                <div className="col-12 col-md-3 text-center">
                    <div className="rounded-circle overflow-hidden mx-auto mb-3 position-relative" style={{
                            width: "140px",
                            height: "140px"
                        }}
                    >
                        <img src="Images/languages.png" alt="Languages" className="position-absolute object-fit-cover" style={{
                                width: "100%",
                                height: "100%",
                                objectPosition: "left",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }} 
                        />
                    </div>
                    <h3 className="fw-normal">Programming Languages & Core Technologies</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="bi bi-code-slash" style={{ marginRight: "8px" }}></i>C#, JavaScript, TypeScript, Python, C++, Java
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-braces" style={{ marginRight: "8px" }}></i>HTML, CSS
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-database" style={{ marginRight: "8px" }}></i>SQL Server, SQLite
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 text-center">
                    <div className="rounded-circle overflow-hidden mx-auto mb-3 position-relative" style={{
                            width: "140px",
                            height: "140px"
                        }}
                    >
                        <img src="Images/framework.png" alt="Frameworks" className="position-absolute object-fit-cover" style={{
                                width: "92%",
                                height: "92%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }} 
                        />
                    </div>
                    <h3 className="fw-normal">Frontend & Backend Development</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="bi bi-filetype-jsx" style={{ marginRight: "8px" }}></i>React
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-file-earmark-code" style={{ marginRight: "8px" }}></i>ASP.NET, .NET Framework, EF Core
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-code-slash" style={{ marginRight: "8px" }}></i>Django
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 text-center">
                    <div 
                        className="rounded-circle overflow-hidden mx-auto mb-3 position-relative" 
                        style={{
                            width: "140px",
                            height: "140px"
                        }}
                    >
                        <img src="Images/tools.png" alt="Tools" className="position-absolute object-fit-cover" style={{
                                width: "150%",
                                height: "150%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-51%, -51%)"
                            }} 
                        />
                    </div>
                    <h3 className="fw-normal">DevOps & Cloud Technologies</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="bi bi-git" style={{ marginRight: "8px" }}></i>Git, GitHub, GitHub Actions
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-box" style={{ marginRight: "8px" }}></i>Docker
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-cloud" style={{ marginRight: "8px" }}></i>Microsoft Azure
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-arrow-repeat" style={{ marginRight: "8px" }}></i>CI/CD Pipelines
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 text-center">
                    <div 
                        className="rounded-circle overflow-hidden mx-auto mb-3 position-relative" 
                        style={{
                            width: "140px",
                            height: "140px"
                        }}
                    >
                        <img src="Images/SDLC.png" alt="Development" className="position-absolute object-fit-cover" style={{
                                width: "100%",
                                height: "100%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }} 
                        />
                    </div>
                    <h3 className="fw-normal">Development Practices & Testing</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="bi bi-person-check" style={{ marginRight: "8px" }}></i>Agile, Scrum
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-clock" style={{ marginRight: "8px" }}></i>SDLC
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-braces" style={{ marginRight: "8px" }}></i>AIML (Artificial Intelligence Markup Language)
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-graph-up" style={{ marginRight: "8px" }}></i>NumPy, Pandas
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-check-circle" style={{ marginRight: "8px" }}></i>xUnit Testing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;