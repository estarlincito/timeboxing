import timeboxingTS from "../types/timeboxingTS";
import endTime from "./endTime";

const statuTB = (timeboxing: timeboxingTS[], duration: string, id: number) => {
  //update item propertie
  const new_timeboxing = timeboxing.map((item) => {
    if (item.id === id) {
      //change statu
      const statu = item.statu === "stop" ? "run" : "stop";

      //update end time
      const end_time = endTime(item);

      //return item with new properties updated
      return { ...item, statu, duration, end_time };
    } else {
      return item;
    }
  });

  return new_timeboxing;
};

export default statuTB;
