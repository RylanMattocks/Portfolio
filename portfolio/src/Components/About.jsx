const About = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row align-items-center mx-lg-5">
                <div className="col-12 col-lg-3 d-flex justify-content-center">
                    <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{
                            width: "40vw",  maxWidth: "350px",  aspectRatio: "1/1", position: "relative" }}
                    >
                        <img src="Images/prof.jpg" alt="Profile" className="position-absolute object-fit-cover" style={{
                                width: "110%",
                                height: "110%",
                                objectPosition: "right 32%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-53%, -50%)"
                            }} />
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <h2>Rylan Mattocks</h2>
                    <p className="lead">
                        I graduated with a Bachelor's degree in Computer Science from Western Governors University, building a strong foundation in software development, 
                        IT principles, programming, data management, and information security. I later expanded my technical skills as a Software Developer at Revature, 
                        gaining hands-on experience with C#, ASP.NET Core, Entity Framework Core, and SQL Server. I also bring four years of professional experience as an 
                        Office Supervisor at TCS Communications, where I developed strong communication, leadership, and teamwork skills while supporting multiple departments. 
                    </p>
                    <p>
                        I am continuing my professional journey at Infosys as an Associate Software Developer, where I work with CMMC Level 2 compliance and the 
                        .NET framework. I'm excited about exploring other opportunities in technology roles that challenge me and foster continuous learning. Outside of work, 
                        I enjoy golfing, playing video games, and engaging in self-improvement activities, such as learning Japanese, exercising, and playing the drums.
                    </p>
                    <a className="btn btn-secondary" href="Mattocks_Resume.pdf" download="Mattocks_Resume.pdf">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;