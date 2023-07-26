



//task 1



function compact(array) {                     // оголосили функцію
  const newArr = [];                          //створили порожній масив
  
  for (let i = 0; i < array.length; i++) {    //перебераем кожен элемент
    if (!newArr.includes(array[i])) {         //Якщо елемент ще не міститься 
                                              // в newArr за допомогою методу includes
      newArr.push(array[i]);                  //додаємо його до масиву newArr
    }
  }
  
  return newArr;                               //повертається
}

//task 2
//task 3
//task 4
//task 5
//task 6
//task 7
