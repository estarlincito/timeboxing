import timeboxingTS from "../types/timeboxingTS";

const addTB = (
  timeboxing: timeboxingTS[],
  name: string,
  obj: string,
  duration: string,
  type: string
) => {
  const new_timeboxing = [
    ...timeboxing,
    {
      name,
      obj,
      duration,
      type,
      end_time: "00:00",
      statu: "stop",
      id: timeboxing.length,
    },
  ];

  return new_timeboxing;
};

export default addTB;
