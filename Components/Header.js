import React from "react";
import Anchor from "./Anchor";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeBurger = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="main-nav">
      <Anchor className="logo" href="/">
        <Image src={logo} alt="logo"></Image>
      </Anchor>
      <div
        className={`menu-btn ${navbarOpen ? " close" : " "}`}
        onClick={handleToggle}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <ul>
          <li onClick={closeBurger}>
            <Anchor href="/schedule">Schedule</Anchor>
          </li>
          <li onClick={closeBurger}>
            <Anchor href="/lineup">Lineup</Anchor>
          </li>
          <li onClick={closeBurger}>
            <Anchor href="/info">Info</Anchor>
          </li>
        </ul>
        <div onClick={closeBurger} className="book-now">
          <Anchor href="/tickets">Book Now</Anchor>
        </div>
      </div>
    </nav>
  );
}
