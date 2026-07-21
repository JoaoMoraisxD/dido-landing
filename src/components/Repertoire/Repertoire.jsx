import { motion } from "framer-motion";
import { FaPlay, FaSpotify, FaYoutube } from "react-icons/fa";

import "./Repertoire.css";

const musics = [

{
title:"Livre",
image:"/images/albums/album1.jpeg",
description:"Rap Melódico",
spotify:"#",
youtube:"#"
},

{
title:"Colirio",
image:"/images/albums/album2.jpeg",
description:"Trap",
spotify:"#",
youtube:"#"
},

{
title:"Deuses",
image:"/images/albums/album3.jpeg",
description:"Trap",
spotify:"#",
youtube:"#"
},

{
title:"Vagabundo",
image:"/images/albums/album4.jpeg",
description:"Rap",
spotify:"#",
youtube:"#"
}

];

export default function Repertoire(){

return(

<section className="repertoire" id="repertoire">

<div className="title">

<span>Repertório</span>

<h2>Conheça alguns trabalhos</h2>

</div>

<div className="musicGrid">

{musics.map((music,index)=>(

<motion.div

className="musicCard"

key={index}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{delay:index*.2}}

>

<img src={music.image} alt={music.title}/>

<div className="musicOverlay">

<h3>{music.title}</h3>

<p>{music.description}</p>

<div className="buttons">

<a href={music.spotify}>

<FaSpotify/>

</a>

<a href={music.youtube}>

<FaYoutube/>

</a>

</div>

</div>

<div className="play">

<FaPlay/>

</div>

</motion.div>

))}

</div>

</section>

)

}