import LineupLines from "../Components/lineup/LineupLines";
import { nanoid } from "nanoid";
import BackgroundLines from "../components/BackgroundLines";
import Head from "next/head";
import { useState } from "react";

export default function Lineup({ data }) {
  const [modalInfo, setModalInfo] = useState(false);
  const [artist, setArtist] = useState("");
  const [artistMembers, setArtistMembers] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");
  const [logoCredits, setLogoCredits] = useState("");
  const [image, setImage] = useState("");

  return (
    <>
      <Head>
        <title>Bubble Gum Festival - Lineup</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <section className="lineupSection">
        <div className="heading-wrapper">
          <h1>LINEUP</h1>
        </div>
        <BackgroundLines />
        <div className="lineup-wrapper">
          <ul className="lineup">
            {data.slice(0, 34).map((item) => (
              <li
                onClick={() => {
                  setModalInfo(true),
                    setArtist(item.name),
                    setArtistMembers(item.members);
                  setGenre(item.genre);
                  setBio(item.bio);
                  setLogoCredits(item.logoCredits);
                  setImage(item.logo);
                }}
                key={nanoid()}
              >
                {item.name}{" "}
                {/* <span
                  className={`artist-modal ${
                    modalInfo ? " show-artist-modal " : " "
                  }`}
                >
                  Show: {artist}
                </span> */}
              </li>
            ))}
          </ul>
        </div>
        <div className={`info-modal ${modalInfo ? " info-modal-show " : " "}`}>
          <div className="modal-heading">
            <h3 className="underline">{artist}</h3>
          </div>
          <div>
            <section className="members">
              <h4>Members</h4>
              <ul>
                <li>{artistMembers[0]}</li>
                <li>{artistMembers[1]}</li>
                <li>{artistMembers[2]}</li>
                <li>{artistMembers[3]}</li>
                <li>{artistMembers[4]}</li>
                <li>{artistMembers[5]}</li>
              </ul>
            </section>
            <section className="genre">
              <h4>Genre</h4>
              <p>{genre}</p>
            </section>
            <section className="bio">
              <h4>Bio</h4>
              <p>{bio}</p>
            </section>
          </div>
          <figure>
            <img src={image} alt={artist}></img>
            <figcaption>{logoCredits}</figcaption>
          </figure>
          <span className="back-front" onClick={() => setModalInfo(false)}>
            X
          </span>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
