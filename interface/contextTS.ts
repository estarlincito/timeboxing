import timeboxingTS from "./timeboxingTS";

interface contextTS {
  timeboxing: timeboxingTS[];
  setTimeboxing: (timeboxing: timeboxingTS[]) => any;
}

export default contextTS;
