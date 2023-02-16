import timeboxingTS from "../types/timeboxingTS";
import { allSeconds } from "../utils/allSeconds";
import { endTime } from "../utils/endTime";
import { formatTimer } from "../utils/formatTimer";

type action = {
  type: "POST" | "DELETE" | "GET" | "STATU" | "INCREMENTS" | "RESET";
  payload: any;
};

const appReducer = (timeboxing: timeboxingTS[], { type, payload }: action) => {
  switch (type) {
    case "GET": {
      return payload;
    }

    case "POST": {
      return [...timeboxing, payload];
    }

    case "STATU": {
      const { duration } = payload;
      const new_timeboxing = timeboxing.map((item) => {
        if (item.id === payload.id) {
          //change statu
          const statu = item.statu === "stop" ? "run" : "stop";

          //update end time
          const end_time = endTime(duration);

          return { ...item, statu, duration, end_time };
        } else {
          return item;
        }
      });

      return new_timeboxing;
    }

    case "DELETE": {
      return timeboxing.filter((item) => item.id !== payload);
    }

    case "INCREMENTS": {
      const seconds = allSeconds(payload.duration);
      const increment = 900;

      const duration = formatTimer(seconds + increment);

      //update end time
      const end_time = endTime(duration);

      const new_timeboxing = timeboxing.map((item) => {
        if (item.id === payload.id) {
          return { ...item, duration, end_time };
        } else {
          return item;
        }
      });

      return new_timeboxing;
    }

    case "RESET": {
      const duration = payload.init_time;
      //update end time
      const end_time = endTime(duration);

      const new_timeboxing = timeboxing.map((item) => {
        if (item.id === payload.id) {
          return { ...item, duration, end_time };
        } else {
          return item;
        }
      });

      return new_timeboxing;
    }

    default:
      return timeboxing;
  }
};

export { appReducer };
