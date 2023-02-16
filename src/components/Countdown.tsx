import { useEffect, useRef, useState } from "react";
import { allSeconds } from "@/src/utils/allSeconds";
import { formatTimer } from "@/src/utils/formatTimer";

type props = {
  timer: string;
};

const Countdown = ({ timer }: props) => {
  const [countdown, setCountdown] = useState(allSeconds(timer));
  const timerId: any = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  // countdown change
  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);

  return <h3>{formatTimer(countdown)}</h3>;
};

export default Countdown;
