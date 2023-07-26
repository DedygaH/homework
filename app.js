



//task 1
// Написати функцію compact() яка має приймати на вхід 
// масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:

// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]

const arr = [5, 3, 4, 5,6,7,3];
function compact(arr) {                     // оголосили функцію
  const arr2 = [];                          //створили порожній масив
  
  for (let i = 0; i < arr.length; i++) {    //перебераем кожен элемент
    if (!arr2.includes(arr[i])) {         //якщо елемент ще не міститься 
                                              // в arr2 за допомогою методу includes
      arr2.push(arr[i]);                  //додаємо його до масиву newArr
    }
  }
  
  return arr2;                               //повертається
}
console.log(arr2);


//task 2
//task 3
//task 4
//task 5
//task 6
//task 7
