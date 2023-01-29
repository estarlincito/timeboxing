import { useContext } from "react";
import UserContext from "../context/UserContext";
import timeboxingTS from "../interface/timeboxingTS";
import deleteTB from "./ts/deleteTB";
import statuTB from "./ts/statuTB";
import Countdown from "./Countdown";

import style from "../styles/card.module.css";
import {
  BsFillPlayFill,
  BsFillStopFill,
  BsFillTrashFill,
} from "react-icons/bs";

type props = timeboxingTS;

const Card = ({ name, obj, duration, type, id, statu, end_time }: props) => {
  const { timeboxing, setTimeboxing } = useContext(UserContext);

  //Delete item
  const handleDelete = () => {
    const new_timeboxing = deleteTB(timeboxing, id);
    setTimeboxing(new_timeboxing);
  };

  //Statu change
  const handlePlay = () => {
    const new_timeboxing = statuTB(timeboxing, id);
    setTimeboxing(new_timeboxing);
  };

  return (
    <div className={style.card}>
      <h3 className={style.title}>{name}</h3>
      <p className={style.text}>{obj}</p>

      <div className={style.time}>
        {statu === "stop" ? (
          <h3>{duration}</h3>
        ) : (
          <Countdown timer={duration} />
        )}
      </div>

      <div className={style.timeinf}>
        {statu === "stop" ? (
          <div className={style.btns}>
            <BsFillPlayFill className={style.btn} onClick={handlePlay} />
            <BsFillTrashFill className={style.btn} onClick={handleDelete} />
          </div>
        ) : (
          <>
            <span className={style.end_time}>
              <b>Termina: </b>
              {end_time}
            </span>

            <div className={style.btns}>
              <BsFillStopFill className={style.btn} onClick={handlePlay} />
              <BsFillTrashFill className={style.btn} onClick={handleDelete} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;