import timeboxingTS from "./timeboxingTS";

interface contextTS {
  timeboxing: timeboxingTS[];

  btn_increment: string;
  setBnt_increment: (btn_increment: string) => void;
  btn_reset: string;
  setBnt_reset: (btn_reset: string) => void;
  postTB: (name: string, obj: string, duration: string, type: string) => void;
  statuTB: (id: number, duration: string) => void;
  deleteTB: (id: number) => void;
  incrementsTB: (id: number, duration: string) => void;
  resetTB: (id: number, init_time: string) => void;
}

export default contextTS;
