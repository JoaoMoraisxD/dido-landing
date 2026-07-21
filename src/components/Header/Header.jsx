import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import "./Header.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className={scrolled ? "header active" : "header"}
        >
            <div className="container">

                <a href="#home" className="logo">
                    DIDÔ
                </a>

                <nav className={menuOpen ? "nav active" : "nav"}>

                    <a href="#home" onClick={closeMenu}>Home</a>

                    <a href="#about" onClick={closeMenu}>Sobre</a>

                    <a href="#repertoire" onClick={closeMenu}>Repertório</a>

                    <a href="#experience" onClick={closeMenu}>Shows</a>

                    <a href="#contact" onClick={closeMenu}>Contato</a>

                </nav>

                <a href="#contact" className="contactButton">
                    Contratar Show
                </a>

                <button
                    className="menuButton"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>
        </motion.header>
    );
}