import { useEffect, useRef, useState } from "react";

type props = {
  timer: string;
};

const formatTimer = (time: number) => {
  let hours = Math.floor((time / (60 * 60)) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  return `${hours <= 9 ? "0" : ""}${hours}:${
    minutes <= 9 ? "0" : ""
  }${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`;
};

const Countdown = ({ timer }: props) => {
  const boxingHour = parseInt(timer.split(":")[0]);
  const boxingMinutes = parseInt(timer.split(":")[1]);
  const seconds = boxingHour * 3600 + boxingMinutes * 60;

  const [countdown, setCountdown] = useState(seconds);
  const timerId: any = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);

  return <h3>{formatTimer(countdown)}</h3>;
};

export default Countdown;
