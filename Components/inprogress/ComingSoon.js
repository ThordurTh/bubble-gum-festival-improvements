import React from "react";
import Anchor from "../Anchor";

function ComingSoon() {
  return (
    <section className="work-in-prog">
      <h1>WORK IN PROGRESS</h1>
      <div className="soon-section">
        <h2 className="mobile-size">Coming soon!</h2>
        <Anchor href="/" className="button-soon">
          &#129044; Go back
        </Anchor>
      </div>
    </section>
  );
}

export default ComingSoon;
