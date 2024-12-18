import { Routes, Route } from 'react-router-dom';
// import About from '../Pages/About';
import Contact from '../Pages/Contact';
// import Experience from '../Pages/Experience';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import NotFound from '../Pages/NotFound';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/experience' element={<Experience />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;