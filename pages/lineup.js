import Lineup from "../components/lineup/Lineup";
import { nanoid } from "nanoid";
import BackgroundLines from "../components/BackgroundLines";
import Head from "next/head";

export default function lineup({ data }) {
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
              <Lineup key={nanoid()} name={item.name} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("https://touchgrassfestival.fly.dev/bands");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
