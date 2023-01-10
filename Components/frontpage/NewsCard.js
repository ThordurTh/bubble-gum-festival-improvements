import Anchor from "../Anchor";
import Image from "next/image";

function NewsCard(props) {
  return (
    <div className="news-card">
      <Image src={props.image} alt="something"></Image>
      <div className="news-content">
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
        <div className="buy-now">
          <Anchor className="arrow" href="/inprogress">
            &#10132;
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
