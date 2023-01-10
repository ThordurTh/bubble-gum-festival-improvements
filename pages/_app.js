import "../styles/globals.scss";
import "../styles/nav.scss";
import "../styles/welcomeSection.scss";
import "../styles/ticketSection.scss";
import "../styles/newsSection.scss";
import "../styles/tickets.scss";
import "../styles/lineup.scss";
import "../styles/info.scss";
import "../styles/schedule.scss";
import "../styles/footer.scss";
import "../styles/workinprog.scss";

import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
