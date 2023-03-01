//Результатом будет undefined, значение не будет найдено.
//Значение this внутри makeUser() равно undefined, потому что оно вызывается как функция, 
//а не через «точечный» синтаксис как метод.  
//ref: this принимает текущее this функции makeUser().
//Вот примера вывоза свойства ref, при котором ошибки не будет
function makeUser() {
    return {
        name: "John",
        ref() {
          return this;
        }
      };
    }
    
    let user = makeUser();
    
    console.log( user.ref().name ); // John