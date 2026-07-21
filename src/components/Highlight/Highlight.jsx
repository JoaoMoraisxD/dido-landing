import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "./Highlight.css";

export default function Highlight(){

    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:.4
    });

    return(

        <section className="highlight" ref={ref}>

            <div className="overlay"></div>

            <div className="highlightContent">

                <motion.h2

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    transition={{duration:.8}}

                >

                    A música conecta histórias.

                </motion.h2>

                <motion.p

                    initial={{opacity:0}}

                    whileInView={{opacity:1}}

                    transition={{delay:.3}}

                >

                    Cada composição é uma experiência única.
                    Rap, Trap e melodias que transformam sentimentos
                    em conexão com o público.

                </motion.p>

                <div className="numbers">

                    <div className="numberCard">

                        <h3>50+</h3>

                        <span>Músicas</span>

                    </div>

                    <div className="numberCard">

                        <h3>20+</h3>

                        <span>Shows</span>

                    </div>

                    <div className="numberCard">

                        <h3>100%</h3>

                        <span>Autoral</span>

                    </div>

                </div>

                <a href="#contact" className="highlightButton">

                    CONTRATAR SHOW

                </a>

            </div>

        </section>

    )

}