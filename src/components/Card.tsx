import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../context/UserContext";
import timeboxingTS from "../types/timeboxingTS";
import Countdown from "./Countdown";
import style from "../styles/card.module.css";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillTrashFill,
  BsPlusCircleFill,
  BsArrowClockwise,
} from "react-icons/bs";

type props = timeboxingTS;

const Card = ({
  name,
  obj,
  duration,
  type,
  id,
  statu,
  init_time,
  end_time,
}: props) => {
  const { timeboxing, statuTB, deleteTB, incrementsTB, resetTB } =
    useContext(UserContext);
  const HTML_Card = useRef<HTMLDivElement>(null);

  //incremente 15 minutes
  const handleIncrement = () => {
    if (HTML_Card.current?.innerText) {
      const current_duration = HTML_Card.current.innerText;
      incrementsTB(id, current_duration);
    }
  };

  //back to init value
  const handleReset = () => {
    resetTB(id, init_time);
  };

  //Statu change
  const handlePlay = () => {
    if (HTML_Card.current?.innerText) {
      const current_duration = HTML_Card.current.innerText;
      statuTB(id, current_duration);
    }
  };

  //delete Timeboxing item
  const handleDelete = () => {
    deleteTB(id);
  };

  return (
    <div className={style.card}>
      <h3 className={style.title}>{name}</h3>
      <p className={style.text}>&quot;{obj}&quot;</p>

      <div className={style.time} ref={HTML_Card}>
        {statu === "stop" ? (
          <h3>{duration}</h3>
        ) : (
          <Countdown timer={duration} />
        )}
      </div>

      <div className={style.timeinf}>
        {statu === "stop" ? (
          <div className={style.btns}>
            {type === "flexible" ? (
              <>
                <BsFillPlayFill className={style.btn} onClick={handlePlay} />
                <BsPlusCircleFill
                  className={style.btn}
                  onClick={handleIncrement}
                />
                <BsArrowClockwise className={style.btn} onClick={handleReset} />
                <BsFillTrashFill className={style.btn} onClick={handleDelete} />
              </>
            ) : (
              <>
                <BsFillPlayFill className={style.btn} onClick={handlePlay} />
                <BsArrowClockwise className={style.btn} onClick={handleReset} />
                <BsFillTrashFill className={style.btn} onClick={handleDelete} />
              </>
            )}
          </div>
        ) : (
          <>
            <span className={style.end_time}>
              <b>Termina: </b>
              {end_time}
            </span>

            <div className={style.btns}>
              {type === "flexible" ? (
                <>
                  <BsFillPauseFill className={style.btn} onClick={handlePlay} />
                  <BsPlusCircleFill
                    className={style.btn}
                    onClick={handleIncrement}
                  />
                  <BsArrowClockwise
                    className={style.btn}
                    onClick={handleReset}
                  />
                  <BsFillTrashFill
                    className={style.btn}
                    onClick={handleDelete}
                  />
                </>
              ) : (
                <>
                  <BsFillPauseFill className={style.btn} onClick={handlePlay} />
                  <BsArrowClockwise
                    className={style.btn}
                    onClick={handleReset}
                  />
                  <BsFillTrashFill
                    className={style.btn}
                    onClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
