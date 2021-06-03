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


function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

console.log(min(5, 6));

// let min = (a,b) => a > b ? b : a;


function max(a, y) {
    if (a > y) {
        return a;
    }
    return y;
}

console.log(max(5, 6))

// let max = (a,y) => a > y ? a : y;


const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
        array[i] = array[i].toString();
        array[i] = array[i].replaceAll('0', 'zero');
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

text1.addEventListener('click', (event) => {
    changeColor(event)

})
text2.addEventListener('click', (event) => {
    changeColor(event)

})
text3.addEventListener('click', (event) => {
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

const input = document.getElementById('inputValue');
const button = document.getElementById('buttonSearch');
const resultHTML = document.getElementById('result');

button.addEventListener('click', () => {
    resultHTML.textContent = '';
    let number = 0;
    for (let value of data) {

        const result = value.country + ' ,' + value.city + ' ,' + value.hotel;
        if (result.includes(input.value)) {
            number++;
            resultHTML.textContent += number + ') ' + result + ' ';
        }
    }
       if (resultHTML.textContent === '') {
        resultHTML.textContent = 'No results';
    }
    })


// Homework lesson-6

function isPalindrome (str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
};
console.log(isPalindrome('Lol'))


const search = str =>
    data.filter(obj => obj?.country?.includes(str) || obj?.city?.includes(str) ||
        obj?.hotel?.includes(str)).map(obj => `${obj.country} ${obj.city} ${obj.hotel}`);

console.log(search('Ber'))

const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
]

const countries = hotels.reduce((acc, item) => {
    const result = { ...acc };
    if (!result[item.country]) {
        result[item.country] = [];
    }
    if (!result[item.country].includes(item.city)) {
        result[item.country].push(item.city);
    }
    return result;
}, {})
console.log(countries)


// Homework lesson-7

const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual (obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object')
        return false;
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);
    if (keysObj1.length !== keysObj2.length)
        return false;
    for (let key of keysObj1) {
        if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
            return false;
    }
    return true;
}
console.log(deepEqual(obj1, obj2))


// Homework lesson-8

const currentYear = new Date().getFullYear()

const studentsData = [
    {
        firstName: "Василий",
        lastName: "Петров",
        admissionYear: 2019,
        courseName: "Java"
    },
    {
        firstName: "Иван",
        lastName: "Иванов",
        admissionYear: 2018,
        courseName: "JavaScript"
    },
    {
        firstName: "Александр",
        lastName: "Федоров",
        admissionYear: 2017,
        courseName: "Python"
    },
    {
        firstName: "Николай",
        lastName: "Петров",
        admissionYear: 2019,
        courseName: "Android"
    }
];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(firstName, lastname, admissionYear, courseName) {
        super(firstName, lastname);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        return currentYear - this.admissionYear;
    }
}

const data2 = studentsData.map((e) => new Student(...Object.values(e)));

class Students {
    constructor(students) {
        this.students = students;
    }

    getInfo() {
        const sorted = this.students.sort((a, b) => a.course - b.course);
        return sorted.map((a) => `${a.fullName} - ${a.courseName}, ${a.course} курс`);
    }
}
const students1 = new Students(data2);

console.log(students1.getInfo());


// Homework lesson-9

const iterColor = () => {
    return {
        data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
        i: 0,
        [Symbol.iterator] () {
            return this;
        },
        next() {
            if (this.i >= this.data.length) {
                this.i = 0;
            }
            return {
                done: false,
                value: this.data[this.i++]
            }
        }

    }
}

const colorIterators = {};
function onClick(el) {
    const id = el.id;
    if (colorIterators[id] === undefined) {
        colorIterators[id] = iterColor()
    }
    el.style.backgroundColor = colorIterators[id].next().value
}


// Homework lesson-10

const data10 = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

const dataMap1 = data10.map(obj => `${obj.city} ${obj.country}`)
const dataMap2 = data10.map(obj => `${obj.name}`)
const dataMap3 = data10.map(obj => `${obj.imageUrl}`)

const section = document.createElement("section")
section.style.cssText = `
background-color: #EAF0F9`
document.body.appendChild(section)

const container = document.createElement("container")
container.style.cssText = `
padding-top: 120px`
section.appendChild(container)

const div = document.createElement("div")
div.innerHTML = 'Homes guests loves'
div.style.cssText = `
font: 40px Roboto, sans-serif;
color: black;
    font-weight: 500;
    line-height: 46px;
    text-align: center;
    margin-top: 0`
container.appendChild(div)

const gallery = document.createElement("gallery")
gallery.style.cssText = `
padding: 105px 105px 120px 105px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    position: relative`
container.appendChild(gallery)

const boxCSS = `
display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    margin-right: 15px;`

const divCSS = `
font: 24px Roboto, sans-serif;
    font-weight: 400;
    line-height: 28px;
    margin-top: 20px;
    color: #3077C6`

const divCSS1 = `
font: 24px Roboto, sans-serif;
    font-weight: 400;
    line-height: 28px;
    margin-top: 20px;
    color: #BFBFBF`

const imgCSS = `
width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center`

const box1 = document.createElement("box")
box1.style.cssText = `${boxCSS}`
gallery.appendChild(box1)

const box2 = document.createElement("box")
box2.style.cssText = `${boxCSS}`
gallery.appendChild(box2)

const box3 = document.createElement("box")
box3.style.cssText = `${boxCSS}`
gallery.appendChild(box3)

const box4 = document.createElement("box")
box4.style.cssText = `${boxCSS}`
gallery.appendChild(box4)

const img0 = document.createElement("img")
src0 = dataMap3[0]
img0.src = src0
img0.style.cssText = `${imgCSS}`

const div0 = document.createElement("div")
div0.innerHTML = dataMap2[0]
div0.style.cssText = `${divCSS}`

const divA = document.createElement("div")
divA.innerHTML = dataMap1[0]
divA.style.cssText = `${divCSS1}`

const img1 = document.createElement("img")
src1 = dataMap3[1]
img1.src = src1
img1.style.cssText = `${imgCSS}`

const div1 = document.createElement("div")
div1.innerHTML = dataMap2[1]
div1.style.cssText = `${divCSS}`

const divB = document.createElement("div")
divB.innerHTML = dataMap1[1]
divB.style.cssText = `${divCSS1}`

const img2 = document.createElement("img")
src2 = dataMap3[2]
img2.src = src2
img2.style.cssText = `${imgCSS}`

const div2 = document.createElement("div")
div2.innerHTML = dataMap2[2]
div2.style.cssText = `${divCSS}`

const divC = document.createElement("div")
divC.innerHTML = dataMap1[2]
divC.style.cssText = `${divCSS1}`

const img3 = document.createElement("img")
src3 = dataMap3[3]
img3.src = src3
img3.style.cssText = `${imgCSS}`

const div3 = document.createElement("div")
div3.innerHTML = dataMap2[3]
div3.style.cssText = `${divCSS}`

const divD = document.createElement("div")
divD.innerHTML = dataMap1[3]
divD.style.cssText = `${divCSS1}`

box1.appendChild(img0)
box1.appendChild(div0)
box1.appendChild(divA)
box2.appendChild(img1)
box2.appendChild(div1)
box2.appendChild(divB)
box3.appendChild(img2)
box3.appendChild(div2)
box3.appendChild(divC)
box4.appendChild(img3)
box4.appendChild(div3)
box4.appendChild(divD)

