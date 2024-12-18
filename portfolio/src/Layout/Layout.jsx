import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ThemeToggle from "../Components/ThemeToggle";

const Layout = ({ children }) => {

    return (
        <div>
            <ThemeToggle />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;