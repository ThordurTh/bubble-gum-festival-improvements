import React from "react";
import CampsSection from "../components/info/CampsSection";
import InfoSection from "../components/info/InfoSection";
import BackgroundLines from "../components/BackgroundLines";
import Head from "next/head";
function info() {
  return (
    <>
      <Head>
        <title>Bubble Gum Festival - Info</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <BackgroundLines> </BackgroundLines>
      <InfoSection></InfoSection>
      <CampsSection></CampsSection>
    </>
  );
}

export default info;
