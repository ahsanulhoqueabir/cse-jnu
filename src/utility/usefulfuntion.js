const timeConvert = (x) => {
  let newTime = x;
  let hrs = parseInt(newTime.split(":")[0]);
  let mins = newTime.slice(3, 5);
  var am_pm = newTime.slice(6, 8);
  if (hrs > 12) {
    hrs -= 12;
    am_pm = "PM";
  } else if (hrs == 12) {
    am_pm = "PM";
  } else if (hrs >= 0 && hrs < 12) {
    hrs = hrs;
    am_pm = "AM";
  }
  return (newTime = `${hrs}:${mins} ${am_pm}`);
};

export { timeConvert };
