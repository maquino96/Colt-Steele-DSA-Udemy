// // // declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3. then print it to the console

let numArr = [1,2,3];

// // console.log(numArr);


// // // define a function "multiplyBy2" that takes one number, multiplies it by 2, and returns that value
// // function multiplyBy2(num){
// //   return num*2;
// // }

// // console.log(multiplyBy2(2));

// // define a function "distanceFrom10" that takes one number and returns its distance from 10. the output should be >= 0 (e.g. passing 8 or 12 should both return a positive 2)

// function distanceFrom10(num){
//   if(num > 10){
//     return num - 10;
//   }else{
//     return 10 -num;
//   }
// }

// // console.log(distanceFrom10(12));
// // console.log(distanceFrom10(8));

// // define a function "map" which takes two arguments, an array and a callback function. "map" will iterate/loop through the array and pass each array element to the callback as an argument. Each output from the callback is pushed to a new array. "map" will return this new array. Please do not use the native .map() method.

// function map(arr, cb){
//   let ans = [];
//   for(let i = 0; i < arr.length; i++){
//     ans.push(cb(arr[i]));
//   }
//   return ans;
// }

// // // function double(ele){
// // //   return ele * 2;
// // // }

// // // const double = (el) => el*2

// // console.log(map([1,2,3,4],  double = (el) => el*2));


// // use your "map" to find the distance from 10 of each number in numArr

// console.log(map(numArr,distanceFrom10));


// define a function called "every" which takes two arguments, an array and a callback function. this callback can be considered a "test", as it will return true or false. "every" will iterate/loop through the array and pass each array element to the callback as an argument. if all outputs from the callback/test are "true", every will return true. if any of the outputs is "false", every will return false. Please do not use the native .every() method.


/*

*/



// console.log(every(numArr, isEven)); //output false

// let arr2 = [2,4,6];

// console.log(every(arr2, isEven)); 

/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.

The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.

If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.

For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

// function screen takes arr and cb 
//create new array of all elements that result in true

function screen(arr, cb){
  let ans = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) ans.push(arr[i]);
  }
  return ans;
}

function isEven(num){
  if(num % 2 == 0) return true;
  return false;
}

let arr3 = [1,2,3,4,5,6];

let arr4 = [1,3,5,7];

// console.log(screen(arr3, isEven)); // return [2,4,6]

// console.log(screen(arr4, isEven)); //return []


// 1,1,2,3,5,8,13

//enter number n and return that element of fib sequence

// function fibNum(n){
//     if(n <= 2){
//       return 1;
//     }
//     return fibNum(n-1) + fibNum(n-2)
// }


// console.log(fibNum(1))
// console.log(fibNum(2))
// console.log(fibNum(3))
// console.log(fibNum(4))
// console.log(fibNum(5))
// console.log(fibNum(50))

// 1 base case
// 2 work
// return function 

// const joe = "Joe";

// joe = 'Tim';

// const ronniepoo = {
//   firstName: 'Joe',
//   lastName: 'Mama'
// }

// ronniepoo.firstName = 'Ronak'
// ronniepoo.lastName = 'Hirpara'

// console.log(ronniepoo)

// // const num = 1;
// // num = 2;

// const arr = [1,2,3];

// arr.push(1);
