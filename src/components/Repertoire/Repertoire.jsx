import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaSpotify, FaYoutube } from "react-icons/fa";

import "./Repertoire.css";

const musics = [
  {
    title: "Livre",
    image: "/images/albums/album1.jpeg",
    description: "Rap Melódico",

    spotify:
      "https://open.spotify.com/album/2DguNa98MToGRhlQwL8cMl?si=fLgFCsbfRCqNcJ5O7rAMHQ",

    youtube:
      "https://www.youtube.com/watch?v=9Jue0ZxI1tI",

    youtubeEmbed:
      "https://www.youtube.com/embed/9Jue0ZxI1tI?si=LBHFhIizvN29f9iT",
  },

  {
    title: "Colirio",
    image: "/images/albums/album2.jpeg",
    description: "Trap",

    spotify:
      "https://open.spotify.com/intl-pt/track/3mPS4QTpWWVoCvyOPqHfgM",

    youtube:
      "https://www.youtube.com/watch?v=az0HAo5Df4w",

    youtubeEmbed:
      "https://www.youtube.com/embed/az0HAo5Df4w?si=XiPwP6nzLGVD7z8L",
  },

  {
    title: "Deuses",
    image: "/images/albums/album3.jpeg",
    description: "Trap",

    spotify:
      "https://open.spotify.com/intl-pt/track/4lEUEVhfNYe4myKbIqzrpq",

    youtube:
      "https://www.youtube.com/watch?v=0omVwhuWLRo",

    youtubeEmbed:
      "https://www.youtube.com/embed/0omVwhuWLRo?si=s6F56JAajmyZ7daz",
  },

  {
    title: "Vagabundo",
    image: "/images/albums/album4.jpeg",
    description: "Rap",

    spotify:
      "https://open.spotify.com/intl-pt/track/5Cgdqqu4mxiYWzPHi3ohbt",

    youtube:
      "https://www.youtube.com/watch?v=SXU-BppGDQ8",

    youtubeEmbed:
      "https://www.youtube.com/embed/SXU-BppGDQ8?si=civxTWOIHpYBwewW",
  },
];

export default function Repertoire() {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const openPlayer = (music) => {
    setSelectedMusic(music);
  };

  const closePlayer = () => {
    setSelectedMusic(null);
  };

  return (
    <>
      <section className="repertoire" id="repertoire">
        <div className="title">
          <span>Repertório</span>

          <h2>Conheça alguns trabalhos</h2>
        </div>

        <div className="musicGrid">
          {musics.map((music, index) => (
            <motion.div
              className="musicCard"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={music.image} alt={music.title} />

              <div className="musicOverlay">
                <h3>{music.title}</h3>

                <p>{music.description}</p>

                <div className="buttons">
                  <a
                    href={music.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSpotify />
                  </a>

                  <a
                    href={music.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <div
                className="play"
                onClick={() => openPlayer(music)}
              >
                <FaPlay />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedMusic && (
        <div className="musicModal" onClick={closePlayer}>
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeModal"
              onClick={closePlayer}
            >
              ✕
            </button>

            <img
              src={selectedMusic.image}
              alt={selectedMusic.title}
            />

            <h2>{selectedMusic.title}</h2>

            <iframe
                width="100%"
                height="400"
                src={selectedMusic.youtubeEmbed}
                title={selectedMusic.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}