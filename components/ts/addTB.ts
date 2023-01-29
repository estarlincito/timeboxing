import timeboxingTS from "../../interface/timeboxingTS";

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

  localStorage.setItem("timeboxing", JSON.stringify(new_timeboxing));
  return new_timeboxing;
};

export default addTB;
