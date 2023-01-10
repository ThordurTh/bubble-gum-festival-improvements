import React from "react";
import CampsCard from "./CampsCard";
import lagoonImg from "../../assets/lagoon.webp";
import happy from "../../assets/happy.webp";
import mm from "../../assets/mm.webp";
import ww from "../../assets/ww.webp";
import bbb from "../../assets/bbb.webp";

const infocards = [
  {
    key: 1,
    infotitle: "Licorice Lagoon",
    img: lagoonImg,
    infotext:
      "The best camping spot for people that love to just chill. For the attendants that choose this camping spots, small boat and canoes can be rented out for rides on our small lake. A bag of licorice flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 2,
    infotitle: "Cherry Camp",
    img: happy,
    infotext:
      "Cherry Camp is the go to camping spot for outgoing people that love being in a community. Gather around the campfire at each end of day for fun activities with the other campers. A bag of cherry flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 3,
    infotitle: "Minty Mountain",
    img: mm,
    infotext:
      "Are you a good climber? Because at the Minty Mountain camp site we have a climbable wall! Practice your skills, and if you are not into climbing, you can always enjoy the camp sites views. A bag of minty flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 4,
    infotitle: "Blueberry Beach",
    img: bbb,
    infotext:
      "Everyone loves a day at the beach, but how about partying at the festival then returning to your camp site, that is literally a beach? Blueberry Beach offers that for it's campers! Grab your towels and chill on the sunchairs! A bag of blueberry flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 5,
    infotitle: "Watermelon Wonderland",
    img: ww,
    infotext:
      "Ever wondered what's it like living in a magical world? Well you can experience that in the Watermelon Wonderland camp site where animators are doing mystical shows everynight! A bag of watermelon flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
];
function CampsSection() {
  return (
    <div className="margin">
      <h1 className="underline">CAMPS INFO</h1>
      <section className="info-cards">
        {infocards.map((item) => (
          <CampsCard
            key={item.key}
            img={item.img}
            infotitle={item.infotitle}
            infotext={item.infotext}
          />
        ))}
      </section>
    </div>
  );
}

export default CampsSection;
