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

// let min = (a,b) => a > b ? b : a;


function max(a,y) {
    if (a > y) {
        return a;
    }
    return y;
}
console.log(max(5,6))

// let max = (a,y) => a > y ? a : y;


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

function changeColor(event) {
    if (!event.target.style.background) {
        event.target.style.background = colors[0];
        return;

    }
    let colorIndex = colors.indexOf(event.target.style.background);
    if (colorIndex === -1) {
        console.log('Current color is not found in array');
        console.log('Current color is: ', event.target.style.background);
        return;
    }
    event.target.style.background = colors[++colorIndex];

}

text1.addEventListener('click', () => {
    changeColor(event)

})
text2.addEventListener('click', () => {
    changeColor(event)

})
text3.addEventListener('click', () => {
    changeColor(event)

})



// Homework lesson-5

const date = '2020-11-26';
const newDate = date.split('-').reverse().join('.');
console.log(newDate)

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const re = prompt('Enter a name: ');
for (i in data) {
    const result = data[i].country + ' ,' + data[i].city + ' ,' + data[i].hotel;
    if (result.includes(re)) {
        console.log(result);
    }
}