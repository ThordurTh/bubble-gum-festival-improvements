import React from "react";
import ComingSoon from "../components/inprogress/ComingSoon";
import Head from "next/head";

function inprogress() {
  return (
    <>
      <Head>
        <title>Bubble Gum Festival - 404</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <ComingSoon></ComingSoon>
    </>
  );
}

export default inprogress;
