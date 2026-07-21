import {
    FaInstagram,
    FaSpotify,
    FaYoutube,
    FaArrowUp
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {

    const scrollTop = () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    return(

        <footer className="footer">

            <div className="footerGlow"></div>

            <div className="footerContainer">

                <div className="footerLeft">

                    <h2>DIDÔ</h2>

                    <p>

                        Rap, Trap e melodias urbanas.
                        Música feita para conectar histórias,
                        sentimentos e experiências reais.

                    </p>

                </div>

                <div className="footerLinks">

                    <h3>Navegação</h3>

                    <a href="#home">Home</a>

                    <a href="#about">Sobre</a>

                    <a href="#repertoire">Repertório</a>

                    <a href="#experience">Shows</a>

                    <a href="#contact">Contato</a>

                </div>

                <div className="footerSocial">

                    <h3>Redes Sociais</h3>

                    <div className="icons">

                        <a href="https://www.instagram.com/ofc_dido?igsh=OGIxOWwxb29oYnNt&utm_source=qr" target="_blank">

                            <FaInstagram/>

                        </a>

                        <a href="https://open.spotify.com/intl-pt/artist/6QrleOqfdPP8VHWBxQ2NQr?si=9Ci8tujNT5S1TDBh1lADoA" target="_blank">

                            <FaSpotify/>

                        </a>

                        <a href="https://www.youtube.com/@ofcdido" target="_blank">

                            <FaYoutube/>

                        </a>

                    </div>

                </div>

            </div>

            <div className="footerBottom">

                © 2026 DIDÔ • Todos os direitos reservados. Desenvolvido por <a href="https://www.linkedin.com/in/jo%C3%A3o-morais-959a9122b/" target="_blank" rel="noopener noreferrer">João Morais</a>

            </div>

            <button

                className="scrollTop"

                onClick={scrollTop}

            >

                <FaArrowUp/>

            </button>

        </footer>

    )

}