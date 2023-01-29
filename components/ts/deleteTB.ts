import timeboxingTS from "../../interface/timeboxingTS";

//delete timeboxing item
const deleteTB = (timeboxing: timeboxingTS[], id: number) => {
  const new_timeboxing = timeboxing.filter((item) => item.id !== id);
  localStorage.setItem("timeboxing", JSON.stringify(new_timeboxing));

  return new_timeboxing;
};

export default deleteTB;
