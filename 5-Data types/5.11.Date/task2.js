function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2012, 0, 3); 
  console.log( getWeekDay(date) ); // ВТ
  let date1 = new Date(2023, 1, 28);
  console.log(getWeekDay(date1))//СР