function isEmptyObj(obj) {
    for (let key in obj) {
      if(obj[key]) {
      console.log (false);
      }
     else {
    console.log(true);
     }
  }}
  
  isEmptyObj({"name": "Vlad"});

