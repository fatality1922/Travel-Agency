export const formatTime = (countDownTime) => {
  if (countDownTime == null ||
    countDownTime < 0 ||
    isNaN(countDownTime) == 1 ||
    typeof (countDownTime) == 'function')
    return null;

  let seconds = Math.floor(countDownTime % 60);
  let minutes = Math.floor((countDownTime / 60) % 60);
  let hours = Math.floor(countDownTime / 3600);

  seconds = seconds.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  hours = hours.toString().padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
};