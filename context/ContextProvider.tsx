import { useEffect, useRef, useState } from "react";
import timeboxingTS from "../interface/timeboxingTS";
import UserContext from "./UserContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextPrivider = ({ children }: props) => {
  // console.log("timeboxing");
  const [timeboxing, setTimeboxing] = useState<timeboxingTS[]>([]);
  const appRender = useRef(0);

  //whent client start app
  useEffect(() => {
    const timeboxingLS =
      localStorage.getItem("timeboxing") ?? JSON.stringify([]);

    setTimeboxing(JSON.parse(timeboxingLS));
  }, []);

  //whent client update timeboxing
  useEffect(() => {
    if (appRender.current === 0) {
      appRender.current = appRender.current + 1;
      return;
    }

    localStorage.setItem("timeboxing", JSON.stringify(timeboxing));
  }, [timeboxing]);

  return (
    <UserContext.Provider
      value={{
        timeboxing,
        setTimeboxing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextPrivider;
