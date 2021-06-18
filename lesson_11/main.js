
const filterAge = document.querySelector('.filter-age');
let counterAdults = 1;
let counterChildren = 0;
let counterRooms = 1;

const filterQuestEl = document.querySelector('.filter-related-quest');
const filterQuestEl2 = document.querySelector('.filter-age');


const changeElPlusAdults = document.querySelector('#changePlusAdults');
const changeElMinusAdults = document.querySelector('#changeMinusAdults');
const changeDisabledMinusAdultEl = document.querySelector('#changeDisabledMinusAdults');
const changeDisabledElPlusAdults = document.querySelector('#changeDisabledPlusAdults');
const changeDisabledMinusRoomEl = document.querySelector('#changeDisabledMinusRooms');
const changeDisabledElPlusRooms = document.querySelector('#changeDisabledPlusRooms');
const changeDisabledMinusChildrenEl = document.querySelector('#changeDisabledMinusChildren');
const changeDisabledPlusChildrenEl = document.querySelector('#changeDisabledPlusChildren');


const ChildrenEl = document.querySelector('#children');
const RoomsEl = document.querySelector('#rooms');

const RelatedEl = document.querySelector('.related');
const FilterRelatedEl = document.querySelector('.filter-related');
const ShowFilter = event => {
    FilterRelatedEl.classList.remove('filter-hidden');
};
RelatedEl.addEventListener('click', ShowFilter);

const PlusAdults = event => {

    if(counterAdults < 30) {
        const numberEl = document.querySelector('#numberAdults');
        const AdultsEl = document.querySelector('#adults');
        counterAdults++;
        numberEl.innerHTML = counterAdults;
        AdultsEl.innerHTML = `${counterAdults} ${'Adults'}`;
        changeElMinusAdults.classList.remove('filter-disabled');
        changeDisabledMinusAdultEl.classList.remove('change-disabled');
    };
    if(counterAdults >= 30) {
        changeElPlusAdults.classList.add('filter-disabled');
        changeDisabledElPlusAdults.classList.add('change-disabled');
    };
};

changeElPlusAdults.addEventListener('click', PlusAdults);

const MinusAdults = event => {

    if(counterAdults > 1) {
        const numberEl = document.querySelector('#numberAdults');
        const AdultsEl = document.querySelector('#adults');
        counterAdults--;
        numberEl.innerHTML = counterAdults;
        AdultsEl.innerHTML = `${counterAdults} ${'Adults'}`;
        changeElPlusAdults.classList.remove('filter-disabled');
        changeDisabledElPlusAdults.classList.remove('change-disabled');
    };
    if(counterAdults <= 1) {
        changeElMinusAdults.classList.add('filter-disabled');
        changeDisabledMinusAdultEl.classList.add('change-disabled');
    }
};

changeElMinusAdults.addEventListener('click', MinusAdults);


const changeElPlusChildren = document.querySelector('#changePlusChildren');
const changeElMinusChildren = document.querySelector('#changeMinusChildren');

const PlusChildren = event => {
    if(counterChildren !== -1) {
        filterQuestEl.classList.remove('filter-hidden');
        filterQuestEl2.classList.remove('filter--hidden');
        FilterRelatedEl.classList.add('filter-related-newheight');
    };
    if(counterChildren < 10) {
        const numberEl = document.querySelector('#numberChildren');
        const ChildrenEl = document.querySelector('#children');
        counterChildren++;
        numberEl.innerHTML = counterChildren;
        ChildrenEl.innerHTML = `${' —'} ${counterChildren} ${'Children'}`;
        changeElMinusChildren.classList.remove('filter-disabled');
        changeDisabledMinusChildrenEl.classList.remove('change-disabled');
    };
    if(counterChildren >= 10) {
        changeElPlusChildren.classList.add('filter-disabled');
        changeDisabledPlusChildrenEl.classList.add('change-disabled');
    };
};

changeElPlusChildren.addEventListener('click', PlusChildren);

const MinusChildren = event => {
    if(counterChildren === 1) {
        filterQuestEl.classList.add('filter-hidden');
        filterQuestEl2.classList.add('filter--hidden');
    };
    if(counterChildren > 0) {
        const numberEl = document.querySelector('#numberChildren');
        const ChildrenEl = document.querySelector('#children');
        counterChildren--;
        numberEl.innerHTML = counterChildren;
        ChildrenEl.innerHTML = `${' —'} ${counterChildren} ${'Children'}`;
        changeElPlusChildren.classList.remove('filter-disabled');
        changeDisabledPlusChildrenEl.classList.remove('change-disabled');
    };
    if(counterChildren <= 0) {
        changeElMinusChildren.classList.add('filter-disabled');
        changeDisabledMinusChildrenEl.classList.add('change-disabled');
        FilterRelatedEl.classList.remove('filter-hidden');
        FilterRelatedEl.classList.remove('filter-related-newheight');
    }
};

changeElMinusChildren.addEventListener('click', MinusChildren);


const changeElPlusRooms = document.querySelector('#changePlusRooms');
const changeElMinusRooms = document.querySelector('#changeMinusRooms');


const PlusRooms = event => {

    if(counterRooms < 30) {
        const numberEl = document.querySelector('#numberRooms');
        const RoomsEl = document.querySelector('#rooms');
        counterRooms++;
        numberEl.innerHTML = counterRooms;
        RoomsEl.innerHTML = `${' —'} ${counterRooms} ${'Rooms'}`;
        changeElMinusRooms.classList.remove('filter-disabled');
        changeDisabledMinusRoomEl.classList.remove('change-disabled');
    };
    if(counterRooms >= 30) {
        changeElPlusRooms.classList.add('filter-disabled');
        changeDisabledElPlusRooms.classList.add('change-disabled');
    };
};

changeElPlusRooms.addEventListener('click', PlusRooms);

const MinusRooms = event => {

    if(counterRooms > 1) {
        const numberEl = document.querySelector('#numberRooms');
        const RoomsEl = document.querySelector('#rooms');
        counterRooms--;
        numberEl.innerHTML = counterRooms;
        RoomsEl.innerHTML = `${' —'} ${counterRooms} ${'Rooms'}`;
        changeElPlusRooms.classList.remove('filter-disabled');
        changeDisabledElPlusRooms.classList.remove('change-disabled');
    };
    if(counterRooms <= 1) {
        changeElMinusRooms.classList.add('filter-disabled');
        changeDisabledMinusRoomEl.classList.add('change-disabled');

    }
};

changeElMinusRooms.addEventListener('click', MinusRooms);


const addChildSelect = () => {
    const oneChildSelect = document.createElement('select');
    oneChildSelect.classList.add('select-child-age');
    oneChildSelect.innerHTML = `
<option value="0">0 years old</option>
<option value="1">1 years old</option>
<option value="2">2 years old</option>
<option value="3">3 years old</option>
<option value="4">4 years old</option>
<option value="5">5 years old</option>
<option value="6">6 years old</option>
<option value="7">7 years old</option>
<option value="8">8 years old</option>
<option value="9">9 years old</option>
<option value="10">10 years old</option>
<option value="11">11 years old</option>
<option value="12">12 years old</option>
<option value="13">13 years old</option>
<option value="14">14 years old</option>
<option value="15">15 years old</option>
<option value="16">16 years old</option>
<option value="17">17 years old</option>`;

    filterAge.insertAdjacentElement('beforeend', oneChildSelect);
    if(counterChildren > 9) {
        changeElPlusChildren.removeEventListener('click', addChildSelect);
    };
};
changeElPlusChildren.addEventListener('click', addChildSelect);


const removeChildSelect = () => {
    let oneChildSelect = document.querySelectorAll('.select-child-age');
    let oneChildSelectAll = oneChildSelect.length - 1;
    oneChildSelect[oneChildSelectAll].remove();
};
changeElMinusChildren.addEventListener('click', removeChildSelect);



