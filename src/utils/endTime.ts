import { allSeconds } from "./allSeconds";
import { formatTimer } from "./formatTimer";

const endTime = (current_duration: string) => {
  const date = new Date();
  const currentHours = date.getHours();
  const CurrentMinutes = date.getMinutes();
  const CurrentSeconds = date.getSeconds();

  const currentTime = allSeconds(
    `${currentHours}:${CurrentMinutes}:${CurrentSeconds}`
  );

  const boxingTime = allSeconds(current_duration);

  return formatTimer(currentTime + boxingTime);
};

export { endTime };
