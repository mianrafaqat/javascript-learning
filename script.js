// const arr = ["a", "b", "c", "d"];
// console.log(arr);
// console.log(arr.slice());
// console.log(arr.slice(2));
// console.log(arr.splice(1, 2));

// console.log(arr.slice(1, 2));
// console.log(arr);

// reverse

// const arr2 = ["j", "i", "h", "g", "f", "e"];
// console.log(arr2.reverse());

//concat

// const letters = arr.concat(arr2);
// console.log(letters);

// join

// console.log(letters.join("-"));

//at method
// const arr = [23, 11, 64];
// console.log(arr.at(0));
// getting the last index value
// console.log(arr.at(-1));
// getting the first index value
// console.log(arr.at(1));

//forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach((movement) => {
//   if (movement > 0) {
//     console.log(`Positive movement: ${movement}`);
//   } else {
//     console.log(`Negative movements: ${movement}`);
//   }
// });

movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movment ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you widthraw ${mov}`);
  }
});
