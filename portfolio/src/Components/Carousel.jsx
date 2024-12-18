import "../Styles/Carousel.css"

const Carousel = () => {

    const slides = [
        { title: "Grading Application", text: "", link: "#grading"},
        { title: "Social Media Platform", text: "", link: "#social"},
        { title: "Adventure Game", text: "", link: "#cyoa"},
        { title: "Weather Predictor", text: "", link: "#weather"},
        { title: "School Roster API", text: "", link: "#api"},
        { title: "Career Path Chatbot", text: "", link: "#chatbot"},
        { title: "Package Delivery System", text: "", link: "#routing"}
    ]

    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {Array(slides.length).fill().map((_, index) => (
                    <button key={index} type="button" data-bs-target="#myCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`} aria-current={index === 0 ? 'true' : undefined}></button>
                ))}
            </div>

            <div className="carousel-inner" >
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                        </svg>
                        <div className="container">
                            <div className="carousel-caption text-center">
                                <h1>{slide.title}</h1>
                                <p>{slide.text}</p>
                                <p><a className="btn btn-lg btn-primary" href={slide.link}>View Project</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;