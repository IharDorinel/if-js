const filterForm = document.createElement('form');
const selectForm = document.createElement('select');
const optionForm0 = document.createElement('option');
const optionForm0Text = document.createTextNode('0 years old');
optionForm0.appendChild(optionForm0Text);
const optionForm1 = document.createElement('option');
const optionForm1Text = document.createTextNode('1 years old');
optionForm1.appendChild(optionForm1Text);
const optionForm2 = document.createElement('option');
const optionForm2Text = document.createTextNode('2 years old');
optionForm2.appendChild(optionForm2Text);
const optionForm3 = document.createElement('option');
const optionForm3Text = document.createTextNode('3 years old');
optionForm3.appendChild(optionForm3Text);
const optionForm4 = document.createElement('option');
const optionForm4Text = document.createTextNode('4 years old');
optionForm4.appendChild(optionForm4Text);
const optionForm5 = document.createElement('option');
const optionForm5Text = document.createTextNode('5 years old');
optionForm5.appendChild(optionForm5Text);
const optionForm6 = document.createElement('option');
const optionForm6Text = document.createTextNode('6 years old');
optionForm6.appendChild(optionForm6Text);
const optionForm7 = document.createElement('option');
const optionForm7Text = document.createTextNode('7 years old');
optionForm7.appendChild(optionForm7Text);
const optionForm8 = document.createElement('option');
const optionForm8Text = document.createTextNode('8 years old');
optionForm8.appendChild(optionForm8Text);
const optionForm9 = document.createElement('option');
const optionForm9Text = document.createTextNode('9 years old');
optionForm9.appendChild(optionForm9Text);
const optionForm10 = document.createElement('option');
const optionForm10Text = document.createTextNode('10 years old');
optionForm10.appendChild(optionForm10Text);
const optionForm11 = document.createElement('option');
const optionForm11Text = document.createTextNode('11 years old');
optionForm11.appendChild(optionForm11Text);
const optionForm12 = document.createElement('option');
const optionForm12Text = document.createTextNode('12 years old');
optionForm12.appendChild(optionForm12Text);
const optionForm13 = document.createElement('option');
const optionForm13Text = document.createTextNode('13 years old');
optionForm13.appendChild(optionForm13Text);
const optionForm14 = document.createElement('option');
const optionForm14Text = document.createTextNode('14 years old');
optionForm14.appendChild(optionForm14Text);
const optionForm15 = document.createElement('option');
const optionForm15Text = document.createTextNode('15 years old');
optionForm15.appendChild(optionForm15Text);
const optionForm16 = document.createElement('option');
const optionForm16Text = document.createTextNode('16 years old');
optionForm16.appendChild(optionForm16Text);
const optionForm17 = document.createElement('option');
const optionForm17Text = document.createTextNode('17 years old');
optionForm17.appendChild(optionForm17Text);
const filterAge = document.querySelector('.filter-age');
filterAge.appendChild(filterForm);
filterForm.appendChild(selectForm);
selectForm.append(optionForm0, optionForm1, optionForm2, optionForm3, optionForm4, optionForm5, optionForm6, optionForm7, optionForm8,
    optionForm9, optionForm10, optionForm11, optionForm12, optionForm13, optionForm14, optionForm15, optionForm16, optionForm17);



let counterAdults = 0;
let counterChildren = 0;
let counterRooms = 0;
const filterQuestEl = document.querySelector('.filter-hidden');
const filterQuestEl2 = document.querySelector('.filter--hidden');

const changeElPlusAdults = document.querySelector('#changePlusAdults');

const PlusAdults = event => {

    if(counterAdults < 30) {
        const numberEl = document.querySelector('#numberAdults');
        counterAdults++;
        numberEl.innerHTML = counterAdults;
    }
};

changeElPlusAdults.addEventListener('click', PlusAdults);

const changeElMinusAdults = document.querySelector('#changeMinusAdults');

const MinusAdults = event => {

    if(counterAdults > 0) {
        const numberEl = document.querySelector('#numberAdults');
        counterAdults--;
        numberEl.innerHTML = counterAdults;
    }
};

changeElMinusAdults.addEventListener('click', MinusAdults);


const changeElPlusChildren = document.querySelector('#changePlusChildren');

const PlusAdultsChildren = event => {
    if(counterChildren !== -1) {
        filterQuestEl.classList.remove('filter-hidden');
        filterQuestEl2.classList.remove('filter--hidden');
    };
    if(counterChildren < 10) {
        const numberEl = document.querySelector('#numberChildren');
        counterChildren++;
        numberEl.innerHTML = counterChildren;
        filterForm++;
    }
};

changeElPlusChildren.addEventListener('click', PlusAdultsChildren);

const changeElMinusChildren = document.querySelector('#changeMinusChildren');

const MinusChildren = event => {
    if(counterChildren === 1) {
        filterQuestEl.classList.add('filter-hidden');
        filterQuestEl2.classList.add('filter--hidden');
    };
    if(counterChildren > 0) {
        const numberEl = document.querySelector('#numberChildren');
        counterChildren--;
        numberEl.innerHTML = counterChildren;
    }
};

changeElMinusChildren.addEventListener('click', MinusChildren);


const changeElPlusRooms = document.querySelector('#changePlusRooms');

const PlusRooms = event => {

    if(counterRooms < 30) {
        const numberEl = document.querySelector('#numberRooms');
        counterRooms++;
        numberEl.innerHTML = counterRooms;
    }
};

changeElPlusRooms.addEventListener('click', PlusRooms);

const changeElMinusRooms = document.querySelector('#changeMinusRooms');

const MinusRooms = event => {

    if(counterRooms > 0) {
        const numberEl = document.querySelector('#numberRooms');
        counterRooms--;
        numberEl.innerHTML = counterRooms;
    }
};

changeElMinusRooms.addEventListener('click', MinusRooms);