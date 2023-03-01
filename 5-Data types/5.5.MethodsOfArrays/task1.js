function camelize(str) {
    return str
      .split('-') // разбиваем на массив
      .map(
        // Переводим в верхний регистр первые буквы всех элементом массива за исключением первого
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяем без пробелов
  }