const formatTimer = (time: number) => {
  let hours = Math.floor((time / (60 * 60)) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  return `${hours <= 9 ? "0" : ""}${hours}:${
    minutes <= 9 ? "0" : ""
  }${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`;
};

export { formatTimer };
