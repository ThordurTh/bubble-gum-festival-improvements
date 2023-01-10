import Image from "next/image";
import lines from "../assets/lines.png";

function BackgroundLines() {
  return (
    <div className="lines-wrapper">
      <Image
        className="background-lines"
        src={lines}
        alt="background lines"
      ></Image>
    </div>
  );
}

export default BackgroundLines;
