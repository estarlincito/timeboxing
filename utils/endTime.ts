import timeboxingTS from "../types/timeboxingTS";
import allSeconds from "./allSeconds";
import formatTimer from "./formatTimer";

const endTime = (item: timeboxingTS) => {
  const date = new Date();
  const currentHours = date.getHours();
  const CurrentMinutes = date.getMinutes();
  const CurrentSeconds = date.getSeconds();

  const boxingHour = parseInt(item.duration.split(":")[0]);
  const boxingMinutes = parseInt(item.duration.split(":")[1]);
  const boxingSeconds = parseInt(item.duration.split(":")[2]);

  const currentTime = allSeconds(
    `${currentHours}:${CurrentMinutes}:${CurrentSeconds}`
  );
  
  const boxingTime = allSeconds(
    `${boxingHour}:${boxingMinutes}:${boxingSeconds}`
  );

  return formatTimer(currentTime + boxingTime);
};

export default endTime;
