import Head from "next/head";
import WelcomeSection from "../components/frontpage/WelcomeSection";
import TicketSection from "../components/frontpage/TicketSection";
import NewsSection from "../components/frontpage/NewsSection";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Bubble Gum Festival</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <div className="front-wrapper">
        <WelcomeSection data={data} />
        <TicketSection />
        <NewsSection />
      </div>
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
