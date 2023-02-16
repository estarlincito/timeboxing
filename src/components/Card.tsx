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
  BsPlusCircle,
  BsArrowCounterclockwise,
} from "react-icons/bs";
import { delayTB } from "../utils/delayTB";

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
  // UserContext
  const {
    btn_increment,
    setBnt_increment,
    btn_reset,
    setBnt_reset,
    statuTB,
    deleteTB,
    incrementsTB,
    resetTB,
  } = useContext(UserContext);
  const card_ref = useRef<HTMLDivElement>(null);

  //Status "run" || "on"
  const currentStatu = (action: string) => {
    switch (action) {
      case "increments": {
        if (statu === "run") {
          setBnt_increment("on");
        }
        if (statu === "stop") {
          setBnt_increment("on");

          (async () => {
            await delayTB(300);
            setBnt_increment("off");
          })();
        }

        return;
      }

      case "reset": {
        if (statu === "run") {
          setBnt_reset("on");
        }
        if (statu === "stop") {
          setBnt_reset("on");

          (async () => {
            await delayTB(300);
            setBnt_reset("off");
          })();
        }

        return;
      }
    }
  };

  //incremente 15 minutes
  const handleIncrement = () => {
    if (card_ref.current?.innerText) {
      const current_duration = card_ref.current.innerText;
      incrementsTB(id, current_duration);
      currentStatu("increments");
    }
  };

  //back to init value
  const handleReset = () => {
    resetTB(id, init_time);
    currentStatu("reset");
  };

  //Statu change
  const handlePlay = () => {
    if (card_ref.current?.innerText) {
      const current_duration = card_ref.current.innerText;
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

      <div className={style.time} ref={card_ref}>
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

                {btn_increment === "off" ? (
                  <BsPlusCircle
                    className={style.btn}
                    onClick={handleIncrement}
                  />
                ) : (
                  <BsPlusCircleFill
                    className={style.btn}
                    onClick={handleIncrement}
                  />
                )}
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

                  {btn_increment === "off" ? (
                    <BsPlusCircle
                      className={style.btn}
                      onClick={handleIncrement}
                    />
                  ) : (
                    <BsPlusCircleFill
                      className={style.btn}
                      onClick={handleIncrement}
                    />
                  )}

                  {btn_reset === "off" ? (
                    <BsArrowClockwise
                      className={style.btn}
                      onClick={handleReset}
                    />
                  ) : (
                    <BsArrowCounterclockwise
                      className={style.btn}
                      onClick={handleReset}
                    />
                  )}

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
