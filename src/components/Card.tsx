import { useContext, useRef, useState } from "react";
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
  const { statuTB, deleteTB, incrementsTB, resetTB } = useContext(UserContext);
  const card_ref = useRef<HTMLDivElement>(null);
  const [btn, setBtn] = useState({
    reset: false,
    incremente: false,
  });

  //Status "run" || "on"
  const currentStatu = (action: string) => {
    switch (action) {
      case "increments": {
        if (statu === "run") {
          setBtn({
            reset: false,
            incremente: true,
          });
        }
        if (statu === "stop") {
          setBtn({
            reset: false,
            incremente: true,
          });

          (async () => {
            await delayTB(300);

            setBtn({
              reset: false,
              incremente: false,
            });
          })();
        }

        return;
      }

      case "reset": {
        if (statu === "run") {
          setBtn({
            reset: true,
            incremente: false,
          });
        }
        if (statu === "stop") {
          setBtn({
            reset: true,
            incremente: false,
          });

          (async () => {
            await delayTB(300);

            setBtn({
              reset: false,
              incremente: false,
            });
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
          <Countdown duration={duration} status={{ btn, setBtn }} />
        )}
      </div>

      <div className={style.timeinf}>
        {statu === "stop" ? (
          <div className={style.btns}>
            {type === "flexible" ? (
              <>
                <BsFillPlayFill className={style.btn} onClick={handlePlay} />

                {btn.incremente === false ? (
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

                {btn.reset === false ? (
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

                <BsFillTrashFill className={style.btn} onClick={handleDelete} />
              </>
            ) : (
              <>
                <BsFillPlayFill className={style.btn} onClick={handlePlay} />

                {btn.reset === false ? (
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

                  {btn.incremente === false ? (
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

                  {btn.reset === false ? (
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

                  {btn.reset === false ? (
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
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
