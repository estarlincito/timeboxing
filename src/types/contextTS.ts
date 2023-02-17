import timeboxingTS from "./timeboxingTS";

interface contextTS {
  timeboxing: timeboxingTS[];
  postTB: (name: string, obj: string, duration: string, type: string) => void;
  statuTB: (id: number, duration: string) => void;
  deleteTB: (id: number) => void;
  incrementsTB: (id: number, duration: string) => void;
  resetTB: (id: number, init_time: string) => void;
}

export default contextTS;
