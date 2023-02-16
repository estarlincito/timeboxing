import { useEffect, useReducer } from "react";
import { appReducer } from "./appReduser";
import UserContext from "./UserContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextPrivider = ({ children }: props) => {
  const [timeboxing, dispatch] = useReducer(appReducer, []);

  //whent client start app
  useEffect(() => {
    getTB();
  }, []);

  //whent client update timeboxing
  useEffect(() => {
    localStorage.setItem("timeboxing", JSON.stringify(timeboxing));
  }, [timeboxing]);

  //------------------------//

  //Get init galue fron local storage
  const getTB = () => {
    const timeboxingLS =
      localStorage.getItem("timeboxing") ?? JSON.stringify([]);

    dispatch({
      type: "GET",
      payload: JSON.parse(timeboxingLS),
    });
  };

  //post a Timeboxing
  const postTB = (
    name: string,
    obj: string,
    duration: string,
    type: string
  ) => {
    dispatch({
      type: "POST",
      payload: {
        name,
        obj,
        duration,
        type,
        init_time: duration,
        end_time: "00:00",
        statu: "stop",
        id: timeboxing.length,
      },
    });
  };

  //change statu TimeBoxing
  const statuTB = (id: number, duration: string) => {
    dispatch({
      type: "STATU",
      payload: { id, duration },
    });
  };

  //increment Timeboxing timer
  const incrementsTB = (id: number, duration: string) => {
    dispatch({
      type: "INCREMENTS",
      payload: { id, duration },
    });
  };

  //delete TimeBoxing
  const deleteTB = (id: number) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const resetTB = (id: number, init_time: string) => {
    dispatch({
      type: "RESET",
      payload: { id, init_time },
    });
  };

  return (
    <UserContext.Provider
      value={{
        timeboxing,
        postTB,
        statuTB,
        deleteTB,
        incrementsTB,
        resetTB,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextPrivider;
