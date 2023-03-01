function getDateAgo(date, days) {
  let startDate = date.getTime();
  let daysAgo = days * 24 * 3600 * 1000;
  console.log(new Date(startDate - daysAgo).getDate());
  }
  
  let date = new Date(2015, 0, 2);
   getDateAgo(date, 1); // 1
   getDateAgo(date, 2); // 31
  getDateAgo(date, 365); // 2

