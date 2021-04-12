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
