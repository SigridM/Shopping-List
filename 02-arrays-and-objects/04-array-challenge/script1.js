// const arr = [1, 2, 3, 4, 5]

// arr.unshift(0)
// arr.push(6)
// arr.reverse()
// console.log(arr)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = [...arr1, ...arr2]

const set = new Set(arr3)

arr3 = Array.from(set)
arr3 = [...set]
arr3 = set
console.log(arr3)