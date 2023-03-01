function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  console.log(day);
}

let date = new Date();
getLocalDay(date)//2