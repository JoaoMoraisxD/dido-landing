import { motion } from "framer-motion";
import {
    FaMicrophone,
    FaMusic,
    FaStar
} from "react-icons/fa";

import "./Experience.css";

const events = [

    {
        date:"05 MAR 2023",
        title:"Irmandade Sessions",
        place:"Morro Alto • Vespasiano",
        icon:<FaMicrophone/>
    },

    {
        date:"22 OUT 2023",
        title:"Rap na Escadaria",
        place:"Congonhas • MG",
        icon:<FaMusic/>
    },

    {
        date:"20 DEZ 2023",
        title:"Black Party",
        place:"Belo Horizonte",
        icon:<FaStar/>
    },

    {
        date:"30 JUN 2025",
        title:"Drilling UFMG",
        place:"Belo Horizonte",
        icon:<FaMusic/>
    },

    {
        date:"15 JUN 2025",
        title:"Clandestina 031",
        place:"Viaduto Santa Tereza",
        icon:<FaMicrophone/>
    },

    {
        date:"31 ABR 2025",
        title:"Amostra Cultural",
        place:"Jardim Leblon",
        icon:<FaStar/>
    }

];

export default function Experience(){

    return(

        <section className="experience" id="experience">

            <div className="experienceTitle">

                <span>Trajetória</span>

                <h2>Shows & Eventos</h2>

            </div>

            <div className="timeline">

                {events.map((event,index)=>(

                    <motion.div

                        key={index}

                        className={`timelineItem ${index%2===0 ? "left" : "right"}`}

                        initial={{
                            opacity:0,
                            y:80
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        viewport={{once:true}}

                        transition={{
                            duration:.7
                        }}

                    >

                        <div className="content">

                            <div className="icon">

                                {event.icon}

                            </div>

                            <small>{event.date}</small>

                            <h3>{event.title}</h3>

                            <p>{event.place}</p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>

    )

}