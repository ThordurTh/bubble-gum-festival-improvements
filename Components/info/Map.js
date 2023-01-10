import React from "react";
import Image from "next/image";
import maps from "../../assets/map.webp";

function Map() {
  return (
    <section className="map-section">
      <h1 className="underline">MAP</h1>
      <div className="map">
        <Image src={maps} alt="map"></Image>
      </div>
    </section>
  );
}

export default Map;
