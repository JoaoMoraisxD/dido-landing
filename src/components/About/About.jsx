import { motion } from "framer-motion";

import {
    FaMusic,
    FaMicrophone,
    FaFire,
    FaMapMarkerAlt
} from "react-icons/fa";

import "./About.css";

export default function About() {

    return (

        <section className="about" id="about">

            <div className="aboutContainer">

                <motion.div

                    className="aboutImage"

                    initial={{ opacity:0,x:-80 }}

                    whileInView={{ opacity:1,x:0 }}

                    viewport={{ once:true }}

                    transition={{ duration:.8 }}

                >

                    <img
                        src="/images/about.jpeg"
                        alt="Didô"
                    />

                </motion.div>

                <motion.div

                    className="aboutText"

                    initial={{ opacity:0,x:80 }}

                    whileInView={{ opacity:1,x:0 }}

                    viewport={{ once:true }}

                    transition={{ duration:.8 }}

                >

                    <span>Quem é Didô?</span>

                    <h2>

                        Música que transforma experiências em arte.

                    </h2>

                    <p>

                        Douglas Dias, artisticamente conhecido como Didô,
                        é cantor e compositor de Belo Horizonte.
                        Seu trabalho mistura Rap, Trap e melodias
                        contemporâneas, trazendo letras sobre vivências,
                        superação, relacionamentos e reflexões pessoais.

                    </p>

                    <div className="aboutCards">

                        <div className="card">

                            <FaMusic/>

                            <h3>Rap & Trap</h3>

                            <p>Música urbana autoral.</p>

                        </div>

                        <div className="card">

                            <FaFire/>

                            <h3>Performance</h3>

                            <p>Shows intensos e marcantes.</p>

                        </div>

                        <div className="card">

                            <FaMicrophone/>

                            <h3>Autoral</h3>

                            <p>Composições próprias.</p>

                        </div>

                        <div className="card">

                            <FaMapMarkerAlt/>

                            <h3>Belo Horizonte</h3>

                            <p>Minas Gerais.</p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}