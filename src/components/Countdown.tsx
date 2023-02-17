import { useEffect, useRef, useState } from "react";
import { allSeconds } from "@/src/utils/allSeconds";
import { formatTimer } from "@/src/utils/formatTimer";
import { delayTB } from "../utils/delayTB";

type props = {
  duration: string;
  status: {
    btn: {
      reset: boolean;
      incremente: boolean;
    };
    setBtn: (btn: { reset: boolean; incremente: boolean }) => void;
  };
};

const Countdown = ({ duration, status }: props) => {
  const [countdown, setCountdown] = useState(allSeconds(duration));
  const { btn, setBtn } = status;
  const timerId: any = useRef();

  //set timer
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

  //if increments or reset
  useEffect(() => {
    if (btn.incremente || btn.reset) {
      setCountdown(allSeconds(duration));

      (async () => {
        await delayTB(300);
        setBtn({
          reset: false,
          incremente: false,
        });
      })();
    }
  }, [btn, duration, setBtn]);

  return <h3>{formatTimer(countdown)}</h3>;
};

export default Countdown;
