function ucFirst(str) {
    if (!str) {
      return "Строка пуста";
    } else {
      return(str[0].toUpperCase() + str.slice(1));
    }
    }