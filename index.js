// 1 - masala

// function longestPalindromicSubstring(str) {
//     let x = ""
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       if (str.split("").slice(i, j).reverse().join("") === str.slice(i, j)) {
//         if (str.split("").slice(i, j).join("").length >= x.length) {
//            x = str.slice(i, j)
//         }
//       }
//     }
//   }
//   return x
// }
// console.log(longestPalindromicSubstring("babadaaad"));
// console.log(longestPalindromicSubstring("cbbd"));
// console.log(longestPalindromicSubstring("a"));
// console.log(longestPalindromicSubstring("babad"));

// 2 - masala

// function rotateArray(arr, k) {
// let x = arr.splice(0, k)
// arr.push(...x)
//     return arr
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// console.log(rotateArray([1, 2, 3, 4, 5], 3));

// 3 - masala

// function twoSum (arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr.length; j++) {
//         if (arr[i] + arr[j] === k && i !== j) {
//             return [i, j]

//         }
//        }
//     }

// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// 4 - masala

// function sumN(arr, n) {
//   let sum = 0;
//  for (const element of arr) {
//     sum += element
//  }
//  return sum === n
// }
// console.log(sumN([1, 4, 2], 7));
// console.log(sumN([1, 2, 3], 4));
// console.log(sumN([1, 2, 2], 5));

// let x = [2, 3, 5].reduce((a, b) => a + b)
// let n = 102
// console.log(x === n)

// 5 - masala

// function twoArray(one, two) {
//   let x = [...one, ... two]
//  let result = []
//  for (const element of x) {
//      let count = 0
//     for (let index = 0; index < x.length; index++) {
//         if (element === x[index]) {
//             count++
//         }
//     }
//     if (count === 1) {
//         result.push(element)
//     }
//  }
//  return result
// }
// console.log(twoArray([2, 4, 1], [2, 3, 8]));
// console.log(twoArray([10, 11, 33], [22, 33, 10]));

// 6 - masala

// function mostNumber(arr) {
//   let object = {};
//   for (const element of arr) {
//     object[element] ? object[element]++ : (object[element] = 1);
//   }
//   let max = 0;
//   let result;
//   for (const key in object) {
//     if (object[key] > max) {
//       max = object[key];
//       result = key;
//     }
//   }
//   return +result;
// }
// console.log(mostNumber([1, 2, 4, 1, 3, 1, 4, 4, 4, 4]));
// console.log(mostNumber([1, 2, 5, 2]));

// 7 - masala

// function incremenDigits(str) {
//   let result = "";
//   for (let index = 0; index < str.length; index++) {
//    if (str[index] >= 0 ) {
//     result += +str[index] + 1
//    }else{
//     result += str[index]
//    }
//   }
//   return result
// }
// console.log(incremenDigits("abc123d4e0"));

// 8 - masala

// function longestIncreasingSubarray(arr) {
//   let long = 1;
//   let count = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       count++;
//     } else {
//       if (count > long) {
//         long = count;
//       }
//       count = 1;
//     }
//   }
//   if (count > long) {
//     long = count;
//   }
//   return long;
// }
// console.log(longestIncreasingSubarray([10, 20, 30, 10, 40, 50, 52, 56, 6]));
// console.log(longestIncreasingSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 9 - masala

// function countOccurences(arr) {
//    const object = {}
//    for (const element of arr) {
//     object[element] ? object[element]++ : (object[element] = 1);
//    }
//    return object
// }
// console.log(countOccurences([1, 2, 2, 3, 4, 4, 4, 5]));
// console.log(countOccurences(["a", "b", "d", "a", "e", "e", "g", "e", "c", "a"]));

// 10 - masala

// function matrixSum(arr) {
//   let newArr = [];
//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       newArr.push(...element);
//     } else {
//       newArr.push(element);
//     }
//   }
//   return newArr.reduce((a, b) => a + b, 0);
// }
// console.log(
//   matrixSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   matrixSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//   ]));
// console.log(matrixSum([1, 2, 3, 4]));

