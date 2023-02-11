const allSeconds = (timer: string) => {
  const boxingHour = parseInt(timer.split(":")[0]);
  const boxingMinutes = parseInt(timer.split(":")[1]);
  const boxingSeconds = parseInt(timer.split(":")[2]);

  return boxingHour * 3600 + boxingMinutes * 60 + boxingSeconds;
};

export default allSeconds;
