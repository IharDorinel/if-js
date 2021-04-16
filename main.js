let user = 'John Doe';
console.log(user);
let student = 'Ihar';
console.log(student);
user = student;
// 'Ihar'
console.log(user);

let test = 1;
console.log(test);

test = test + 1;
console.log(test);

test = test + '1';
// 21
console.log(test);

test = test - 1;
// 20
console.log(test);

test = !!test;
// true
console.log(test);

const array1 = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < array1.length; i++) {
    result *= array1[i];
}
console.log(result);

const array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    }
}

const array3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < array3.length; i++) {
    if (array3[i] % 2 === 0) {
        console.log(array3[i]);
    }
}

// Homework lesson-3

function palindrome(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            result = !!str;
        }
        else {
            result = !str;
            return result;
        }
    }
    return result;
}
console.log(palindrome('шалаш'))

// function min(a,b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }
// console.log(min(5,6));

let min = (a,b) => a > b ? b : a;
console.log(min(5,4));

// function max(a,y) {
//     if (a > y) {
//         return a;
//     }
//     return y;
// }
// console.log(max(5,6))

let max = (a,y) => a > y ? a : y;
console.log(max(5,4))

const array = Array.from({length:10}, () => Math.floor(Math.random() * 100));
let char = /0/gi;
let str = array.toString();
let newstr = str.replace(char, 'zero');
console.log(newstr)