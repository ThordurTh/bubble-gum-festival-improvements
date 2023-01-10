import NewsCard from "./NewsCard";
import newsImage1 from "../../assets/news-image1.webp";
import newsImage2 from "../../assets/news-image2.webp";
import newsImage3 from "../../assets/news-image3.webp";

const news = [
  {
    key: 1,
    heading: "Bubblegum 2022",
    paragraph:
      "The Bubblegum Festival 2022 edition saw a rise of over 300.000 people attending!",
    image: newsImage1,
  },
  {
    key: 2,
    heading: "Crews incoming!",
    paragraph:
      "Crews and bands are already testing their equipments for the 2023 festival edition.",
    image: newsImage2,
  },
  {
    key: 3,
    heading: "Sustainable Partying",
    paragraph:
      "At Bubblegum, we care about the planet, read more about our sustainability efforts.",
    image: newsImage3,
  },
];

function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="underline">News</h2>
      <div className="news-cards">
        {news.map((item) => (
          <NewsCard
            key={item.key}
            heading={item.heading}
            paragraph={item.paragraph}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
