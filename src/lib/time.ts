export const formatTime = (time: number) => {
  return time <= 9 ? `0${time}` : time;
};
