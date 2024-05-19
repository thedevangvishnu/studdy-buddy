export const formatTime = (time: number) => {
  return time <= 9 ? `0${time}` : time;
};

export const calculateDuration = (start: Date, end: Date | null) => {
  if (!end) {
    return { hr: "Ongoing", mins: "" };
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffMs = endDate.getTime() - startDate.getTime();
  if (diffMs < 0) {
    throw new Error("End date must be after start date");
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const hr = diffHours;
  const mins = diffMinutes;

  // let hr = formatTime(Math.floor(endDate.getHours() - startDate.getHours()));
  // let mins = formatTime(
  //   Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60)
  // );

  if (hr === 0) return { mins };

  return { hr, mins };
};
