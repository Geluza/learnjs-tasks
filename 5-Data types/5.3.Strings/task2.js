function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
