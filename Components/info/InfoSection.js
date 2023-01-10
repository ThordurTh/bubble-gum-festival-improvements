import React from "react";
import Image from "next/image";
import maps from "../../assets/map.webp";
function InfoSection() {
  return (
    <section className="info-section">
      <h1 className="underline">BUBBLEGUM FESTIVAL INFO</h1>
      <div className="tester">
        <p>
          Bubblegum Festival is known for hosting an annual music festival,
          which attracts music lovers from all over the region. The festival
          features a wide range of musical acts, from up-and-coming artists to
          well-known performers. There are a number of different campsites
          available at Bubblegum festival, each with its own unique character.
          Some sites are more secluded and private, while others offer beautiful
          views of the surrounding landscape.<br></br>
          <br></br>Bubblegum Festival also offers a range of amenities,
          including flush toilets, showers, and a camp store where you can
          purchase basic supplies. <br></br>
          <br></br>At Bubblegum festival we pride ourselves with throwing the
          best parties, with no downsides! Our crew will be monitoring the
          safety of attendants 24/7, making sure everyone has the best
          experience.
          <br></br>Inclusivity means a lot to us, and that is why no sort of
          exclusions will happen to our participants. Everyone is welcome to
          attend, dance and party.<br></br> Below you can find usefull
          information about our camps.<br></br>
          <br></br>Happy partying!
        </p>
        <div className="map">
          <Image src={maps} alt="map"></Image>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
