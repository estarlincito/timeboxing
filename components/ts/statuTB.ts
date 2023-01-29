import timeboxingTS from "../../interface/timeboxingTS";

const statuTB = (timeboxing: timeboxingTS[], id: number) => {
  const new_timeboxing = timeboxing.map((item) => {
    if (item.id === id) {
      //change statu
      const statu = item.statu === "stop" ? "run" : "stop";

      //set end time
      const date = new Date();
      const currentHours = date.getHours();
      const CurrentHminutes = date.getMinutes();

      const boxingHour = parseInt(item.duration.split(":")[0]);
      const boxingMinutes = parseInt(item.duration.split(":")[1]);

      const end_time = `${currentHours + boxingHour}:${
        CurrentHminutes + boxingMinutes
      }`;

      return { ...item, statu, end_time };
    }

    return item;
  });

  localStorage.setItem("timeboxing", JSON.stringify(new_timeboxing));
  return new_timeboxing;
};

export default statuTB;
