



//task 1
// Написати функцію compact() яка має приймати на вхід 
// масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]

const arr = [5, 3, 4, 5,6,7,3];             //масив
const arr2 = compact(arr);                  //змінній arr2 присвоїли результат виконання функції
function compact(arr) {                     // оголосили функцію
  const arr2 = [];                          //створили порожній масив
  
  for (let i = 0; i < arr.length; i++) {    //перебераем кожен элемент
    if (!arr2.includes(arr[i])) {           //якщо елемент ще не міститься 
                                            // в arr2 за допомогою методу includes
      arr2.push(arr[i]);                    //додаємо його до масиву arr2
    }
  }
  
  return arr2;                              //повертається
}
console.log(arr2);


//task 2
// Написати функцію createArray(start, end),
// яка приймає на вхід 2 параметри:
// початкове значення, кінцеве значення
// а на виході отримує масив із діапазоном цих значень
// (реалізувати достатньо лише із числовими значеннями)

// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

let arr = createArray(2, 9);                    //змінній arr присвоїли масив з 2,9
function createArray(start, end) {              //оголосили функцію, яка створює масив чисел 
                                                //з вказаного початкового значення start 
                                                //до кінцевого значення end.
  const arr = [];                               //створюєм порожній масив arr
  for (let i = start; i <= end; i++) {          //ітерація по числам від start до end.
    arr.push(i);                                //додаємо i до масиву arr
  }
  return arr;                                   //повертає масив arr
}
console.log(arr);


//task 3
//task 4
//task 5
//task 6
//task 7
