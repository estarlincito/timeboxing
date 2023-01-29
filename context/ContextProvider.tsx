import { useEffect, useRef, useState } from "react";
import timeboxingTS from "../interface/timeboxingTS";
import UserContext from "./UserContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextPrivider = ({ children }: props) => {
  const [timeboxing, setTimeboxing] = useState<timeboxingTS[]>([]);
  const appRender = useRef(0);

  useEffect(() => {
    //to one render
    if (appRender.current === 0) {
      appRender.current = appRender.current + 1;
      return;
    }

    //get timeboxing from localStorage
    if (!localStorage.getItem("timeboxing")?.length) {
      localStorage.setItem("timeboxing", JSON.stringify(timeboxing));
    } else {
      setTimeboxing(JSON.parse(localStorage.getItem("timeboxing") || ""));
    }
  }, []);

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
