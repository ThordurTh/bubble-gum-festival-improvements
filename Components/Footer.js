import React from "react";
import Anchor from "./Anchor";
import Image from "next/image";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import spotify from "../assets/spotify.png";

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul>
          <li>
            <Anchor href="/inprogress">CONTACT</Anchor>
          </li>
          <li>
            <Anchor href="/inprogress">INFO</Anchor>
          </li>
          <li>
            <Anchor href="/inprogress">PRESS</Anchor>
          </li>
          <li>
            <Anchor href="/inprogress">TERMS</Anchor>
          </li>
        </ul>
      </nav>
      <nav className="socials">
        <ul>
          <li>
            <Anchor href="">
              <Image
                className="social-icon"
                alt="facebook icon"
                src={facebook}
              ></Image>
            </Anchor>
          </li>
          <li>
            <Anchor href="">
              <Image
                className="social-icon"
                alt="instagram icon"
                src={instagram}
              ></Image>
            </Anchor>
          </li>
          <li>
            <Anchor href="">
              <Image
                className="social-icon"
                alt="twitter icon"
                src={twitter}
              ></Image>
            </Anchor>
          </li>
          <li>
            <Anchor href="">
              <Image
                className="social-icon"
                alt="spotify icon"
                src={spotify}
              ></Image>
            </Anchor>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
