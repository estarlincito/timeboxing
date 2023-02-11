import { useEffect, useRef, useState } from "react";
import RouterChangeStart from "../hooks/RouterChangeStart";
import timeboxingTS from "../types/timeboxingTS";
import UserContext from "./UserContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextPrivider = ({ children }: props) => {
  const [timeboxing, setTimeboxing] = useState<timeboxingTS[]>([]);

  //if timeboxing is run and router changed
  RouterChangeStart(timeboxing);

  //whent client start app
  useEffect(() => {
    const timeboxingLS =
      localStorage.getItem("timeboxing") ?? JSON.stringify([]);

    setTimeboxing(JSON.parse(timeboxingLS));
  }, []);

  //whent client update timeboxing
  useEffect(() => {
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
