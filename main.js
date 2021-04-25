// Homework lesson-2

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

//  Homework lesson-3

function palindrome(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return str === result;
}
console.log(palindrome('шалаш'))


function min(a,b) {
    if (a > b) {
        return b;
    }
    return a;
}
console.log(min(5,6));

let min = (a,b) => a > b ? b : a;


function max(a,y) {
    if (a > y) {
        return a;
    }
    return y;
}
console.log(max(5,6))

let max = (a,y) => a > y ? a : y;


const array = Array.from({length:10}, () => Math.floor(Math.random() * 100));
for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
        array[i] = array[i].toString();
        array[i] = array[i].replaceAll('0','zero');
    }
}
console.log(array)

// Homework lesson-4

const getSum = (arg1) => {
    return (arg2) => {
        return arg1 + arg2;
    }
}
console.log(getSum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

function changeColor1() {
    let color = 0;
    text1.addEventListener('click', () => {
        text1.style.background = colors[color];
        color++;
        if (color === colors.length) {
            color = 0;
        }
    })
}
function changeColor2() {
    let color = 0;
    text2.addEventListener('click', () => {
        text2.style.background = colors[color];
        color++;
        if (color === colors.length) {
            color = 0;
        }
    })
}
function changeColor3() {
    let color = 0;
    text3.addEventListener('click', () => {
        text3.style.background = colors[color];
        color++;
        if (color === colors.length) {
            color = 0;
        }
    })
}
console.log(text1, text2, text3)

