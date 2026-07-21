import "./App.css";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Repertoire from "./components/Repertoire/Repertoire.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Highlight from "./components/Highlight/Highlight.jsx";

function App() {
    return (
        <>
            <Header />

            <Hero />

            <About />

            <Repertoire />

            <Experience />

            <Highlight />

            <Contact />

            <Footer />
        </>
    );
}

export default App;