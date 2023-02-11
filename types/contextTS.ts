import timeboxingTS from "./timeboxingTS";

interface contextTS {
  timeboxing: timeboxingTS[];
  setTimeboxing: (timeboxing: timeboxingTS[]) => void;
}

export default contextTS;
