import React from "react";
import CampsSection from "../components/info/CampsSection";
import InfoSection from "../components/info/InfoSection";
import BackgroundLines from "../components/BackgroundLines";
import Head from "next/head";
import { useRef } from "react";
import { useInView } from "framer-motion";

function info() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Head>
        <title>Bubble Gum Festival - Info</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>

      <BackgroundLines> </BackgroundLines>
      <InfoSection></InfoSection>
      <section className="section-test" ref={ref}>
        <span
          className="section-child"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <CampsSection></CampsSection>
        </span>
      </section>
    </>
  );
}

export default info;
