import { motion } from "framer-motion";

import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {

    return (

        <section className="contact" id="contact">

            <div className="contactContainer">

                <motion.div

                    className="contactInfo"

                    initial={{ opacity:0,x:-60 }}

                    whileInView={{ opacity:1,x:0 }}

                    viewport={{ once:true }}

                >

                    <span>Contratação</span>

                    <h2>

                        Vamos levar o show do Didô para seu evento.

                    </h2>

                    <p>

                        Entre em contato para eventos,
                        festivais, casas de show,
                        participações especiais ou projetos.

                    </p>

                    <div className="info">

                        <div>

                            <FaWhatsapp/>

                            <span>(31) 98250-6817</span>

                        </div>

                        <div>

                            <FaEnvelope/>

                            <span>douglas.dido.dias@gmail.com</span>

                        </div>

                        <div>

                            <FaMapMarkerAlt/>

                            <span>Belo Horizonte • MG</span>

                        </div>

                    </div>

                    <div className="socials">

                        <a href="https://www.instagram.com/ofc_dido?igsh=OGIxOWwxb29oYnNt&utm_source=qr" target="_blank">
                            <FaInstagram/>
                        </a>

                        <a href="http://wa.me/+553182506817" target="_blank">
                            <FaWhatsapp/>
                        </a>

                    </div>

                </motion.div>

{/*                <motion.form

                    className="contactForm"

                    initial={{ opacity:0,x:60 }}

                    whileInView={{ opacity:1,x:0 }}

                    viewport={{ once:true }}

                >

                    <input
                        type="text"
                        placeholder="Nome"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="tel"
                        placeholder="Telefone"
                    />

                    <input
                        type="text"
                        placeholder="Tipo de Evento"
                    />

                    <textarea

                        rows="6"

                        placeholder="Conte um pouco sobre seu evento..."

                    />

                    <button>

                        Solicitar Orçamento

                    </button>

                </motion.form> */}

            </div>

        </section>

    )

}