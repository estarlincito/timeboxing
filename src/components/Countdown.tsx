import { useContext, useEffect, useRef, useState } from "react";
import { allSeconds } from "@/src/utils/allSeconds";
import { formatTimer } from "@/src/utils/formatTimer";
import UserContext from "../context/UserContext";
import { delayTB } from "../utils/delayTB";

type props = {
  timer: string;
};

const Countdown = ({ timer = "02:44:21" }: props) => {
  const [countdown, setCountdown] = useState(allSeconds(timer));
  const { btn_increment, setBnt_increment, btn_reset, setBnt_reset } =
    useContext(UserContext);
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

  //if current time increment
  useEffect(() => {
    if (btn_increment === "on") {
      setCountdown((prev) => prev + 900);

      (async () => {
        await delayTB(300);
        setBnt_increment("off");
      })();
    }
  }, [btn_increment, setBnt_increment]);

  //whent current time reset
  useEffect(() => {
    if (btn_reset === "on") {
      setCountdown(allSeconds(timer));

      (async () => {
        await delayTB(300);
        setBnt_reset("off");
      })();
    }
  }, [btn_reset, setBnt_reset, timer]);

  return <h3>{formatTimer(countdown)}</h3>;
};

export default Countdown;
