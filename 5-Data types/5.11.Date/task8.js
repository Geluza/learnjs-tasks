
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    console.log('прямо сейчас');
  } else if (diffMin < 1) {
    console.log(`${diffSec} сек. назад`)
  } else if (diffHour < 1) {
    console.log(`${diffMin} мин. назад`)
  } else {
    console.log(`${dayOfMonth}.${month}.${year} ${hour}:${minutes}`)
  }
}

formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400 * 1000))