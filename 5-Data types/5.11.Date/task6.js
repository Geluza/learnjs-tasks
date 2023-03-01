function getSecondsToday() {
  let now = new Date();
  //объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today; 
  console.log(Math.round(diff / 1000)); 
}

getSecondsToday();