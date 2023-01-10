import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import BackgroundLines from "../Components/BackgroundLines";
import Head from "next/head";

export default function Schedule({ data }) {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const stages = ["Tutti Frutti", "Wintergreen", "Sour Apple"];

  const [activeDay, setActiveDay] = useState(days[0]);

  function ToggleGroup() {
    return (
      <>
        {days.map((day) => (
          <button
            className={activeDay === day ? "active" : " "}
            key={day}
            onClick={() => {
              setActiveDay(day);
            }}
          >
            {day}
          </button>
        ))}
      </>
    );
  }

  function getAct(item) {
    if (item.act === "break") {
      return <></>;
    } else {
      return (
        <li key={nanoid()} className={item.cancelled && "cancelled"}>
          <span className="schedule-act">{item.act}</span>
          <span className="dotted-line"></span>
          <span className="start-end">
            {item.start} - {item.end}
          </span>
        </li>
      );
    }
  }

  return (
    <>
      <Head>
        <title>Bubble Gum Festival - Schedule</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      <BackgroundLines></BackgroundLines>
      <div className="schedule-wrapper">
        <div className="heading-wrapper">
          <h1>Schedule</h1>
        </div>
        <div className="filtering">
          <ToggleGroup />
        </div>
        <div className="stages">
          <section className="tutti-frutti">
            <h2>Tutti Frutti</h2>
            <ul>{data[stages[0]][activeDay.slice(0, 3)].map(getAct)}</ul>
          </section>
          <section className="wintergreen">
            <h2>Wintergreen</h2>
            <ul>{data[stages[1]][activeDay.slice(0, 3)].map(getAct)}</ul>
          </section>
          <section className="sour-apple">
            <h2>Sour Apple</h2>
            <ul>{data[stages[2]][activeDay.slice(0, 3)].map(getAct)}</ul>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("https://touchgrassfestival.fly.dev/schedule");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
