function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  console.log(date.getDate());
}

getLastDayOfMonth(2012, 0); // 31
getLastDayOfMonth(2012, 1); // 29
getLastDayOfMonth(2013, 1); // 28