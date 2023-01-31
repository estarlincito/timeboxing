import timeboxingTS from "../../interface/timeboxingTS";

//delete timeboxing item
const deleteTB = (timeboxing: timeboxingTS[], id: number) => {
  const new_timeboxing = timeboxing.filter((item) => item.id !== id);
  return new_timeboxing;
};

export default deleteTB;
