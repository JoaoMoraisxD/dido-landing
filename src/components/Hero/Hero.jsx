import { motion, useScroll, useTransform } from "framer-motion";
import { FaSpotify, FaPlay, FaChevronDown } from "react-icons/fa";

import "./Hero.css";

export default function Hero() {

    const { scrollY } = useScroll();

    const backgroundY = useTransform(scrollY, [0, 800], [0, 250]);

    const textY = useTransform(scrollY, [0, 800], [0, 120]);

    return (

        <section className="hero" id="home">

            <motion.div
                className="heroBackground"
                style={{
                    y: backgroundY
                }}
            />

            <div className="overlay"></div>

            <motion.div
                className="heroContent"
                style={{
                    y: textY
                }}
            >

                <motion.span

                    initial={{ opacity:0,y:20 }}

                    animate={{ opacity:1,y:0 }}

                    transition={{ duration:.8 }}

                    className="artistType"

                >

                    RAP • TRAP • MELODIAS URBANAS

                </motion.span>

                <motion.h1

                    initial={{ opacity:0,y:40 }}

                    animate={{ opacity:1,y:0 }}

                    transition={{ delay:.3,duration:.8 }}

                >

                    DIDÔ

                </motion.h1>

                <motion.p

                    initial={{ opacity:0,y:40 }}

                    animate={{ opacity:1,y:0 }}

                    transition={{ delay:.5,duration:.8 }}

                >

                    Música feita para quem vive intensamente.
                    Histórias reais, superação, relacionamentos
                    e sentimentos transformados em arte.

                </motion.p>

                <motion.div

                    className="heroButtons"

                    initial={{ opacity:0 }}

                    animate={{ opacity:1 }}

                    transition={{ delay:.8 }}

                >

                    <a href="#repertoire" className="primaryButton">

                        <FaPlay />

                        Conheça o Repertório

                    </a>

                    <a href="#contact" className="secondaryButton">

                        <FaSpotify />

                        Contratar Show

                    </a>

                </motion.div>

            </motion.div>

            <div className="scrollDown">

                <FaChevronDown />

            </div>

        </section>

    );

}