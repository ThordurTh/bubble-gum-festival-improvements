import Head from "next/head";
import WelcomeSection from "../components/frontpage/WelcomeSection";
import TicketSection from "../components/frontpage/TicketSection";
import NewsSection from "../components/frontpage/NewsSection";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Head>
        <title>Bubble Gum Festival</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <div className="front-wrapper">
        <WelcomeSection data={data} />
        <Section>
          <TicketSection />
        </Section>
        <Section>
          <NewsSection />
        </Section>
      </div>
    </>
  );
}

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-test" ref={ref}>
      <span
        className="section-child"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
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
