import { useState, useEffect, useRef } from "react";

const formatTime = (time) => {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor((time / 60 / 60) % 24);
  const days = Math.floor(time / 24 / 60 / 60);

  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
};

function Countdown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      alert("END");
    }
  }, [countdown]);

  return <span className="countdown">{formatTime(countdown)}</span>;
}

export default Countdown;
