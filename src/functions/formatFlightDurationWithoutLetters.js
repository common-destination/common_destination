const formatFlightDurationWithoutLetters = (flightDuration) => {
  const getSplited = flightDuration.split(" ");
  const getSlicedHour = getSplited[0];
  const getSlicedMinutes = getSplited[3];
  if (getSlicedMinutes === "0") {
    return `${getSlicedHour}:00`;
  } else return `${getSlicedHour}:${getSlicedMinutes}`;
};

export default formatFlightDurationWithoutLetters;
