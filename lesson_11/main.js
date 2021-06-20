const RelatedEl = document.querySelector('.related');
const FilterRelatedEl = document.querySelector('.filter-related');

const AdultsEl = document.querySelector('#adults');
const ChildrenEl = document.querySelector('#children');
const RoomsEl = document.querySelector('#rooms');

const changeElPlusAdults = document.querySelector('#changePlusAdults');
const changeElMinusAdults = document.querySelector('#changeMinusAdults');
const changeDisabledElPlusAdults = document.querySelector('#changeDisabledPlusAdults');
const changeDisabledMinusAdultEl = document.querySelector('#changeDisabledMinusAdults');
const changeElPlusChildren = document.querySelector('#changePlusChildren');
const changeElMinusChildren = document.querySelector('#changeMinusChildren');
const changeDisabledPlusChildrenEl = document.querySelector('#changeDisabledPlusChildren');
const changeDisabledMinusChildrenEl = document.querySelector('#changeDisabledMinusChildren');
const changeElPlusRooms = document.querySelector('#changePlusRooms');
const changeElMinusRooms = document.querySelector('#changeMinusRooms');
const changeDisabledElPlusRooms = document.querySelector('#changeDisabledPlusRooms');
const changeDisabledMinusRoomEl = document.querySelector('#changeDisabledMinusRooms');

const filterAge = document.querySelector('.filter-age');
const filterQuestEl = document.querySelector('.filter-related-quest');

let counterAdults = 1;
let counterChildren = 0;
let counterRooms = 1;

// по клику открывается фильтр
const ShowFilter = event => {
    FilterRelatedEl.classList.remove('filter-hidden');
};
RelatedEl.addEventListener('click', ShowFilter);

// по клику увеличивается кол-во взрослых
const PlusAdults = event => {
    if(counterAdults < 30) {
        const numberEl = document.querySelector('#numberAdults');
        counterAdults++;
        numberEl.innerHTML = counterAdults;
        AdultsEl.innerHTML = `${'&nbsp;'} ${counterAdults} ${'Adults'}`;
        changeElMinusAdults.classList.remove('filter-disabled');
        changeDisabledMinusAdultEl.classList.remove('change-disabled');
    };
    if(counterAdults >= 30) {
        changeElPlusAdults.classList.add('filter-disabled');
        changeDisabledElPlusAdults.classList.add('change-disabled');
    };
};

changeElPlusAdults.addEventListener('click', PlusAdults);

// по клику уменьшается кол-во взрослых
const MinusAdults = event => {
    if(counterAdults > 1) {
        const numberEl = document.querySelector('#numberAdults');
        counterAdults--;
        numberEl.innerHTML = counterAdults;
        AdultsEl.innerHTML = `${'&nbsp;&nbsp;'}${counterAdults} ${'Adults'}`;
        changeElPlusAdults.classList.remove('filter-disabled');
        changeDisabledElPlusAdults.classList.remove('change-disabled');
    };
    if(counterAdults <= 1) {
        changeElMinusAdults.classList.add('filter-disabled');
        changeDisabledMinusAdultEl.classList.add('change-disabled');
    }
};

changeElMinusAdults.addEventListener('click', MinusAdults);

// по клику увеличивается кол-во детей, открывается подсекция с вопросом и полем для выпад. списков
const PlusChildren = event => {
    if(counterChildren !== -1) {
        filterQuestEl.classList.remove('filter-hidden');
        filterAge.classList.remove('filter-hidden');
        FilterRelatedEl.classList.add('filter-related-newheight');
    };
    if(counterChildren < 10) {
        const numberEl = document.querySelector('#numberChildren');
        counterChildren++;
        numberEl.innerHTML = counterChildren;
        ChildrenEl.innerHTML = `${'&nbsp;—'} ${counterChildren} ${'Children'}`;
        changeElMinusChildren.classList.remove('filter-disabled');
        changeDisabledMinusChildrenEl.classList.remove('change-disabled');
    };
    if(counterChildren >= 10) {
        changeElPlusChildren.classList.add('filter-disabled');
        changeDisabledPlusChildrenEl.classList.add('change-disabled');
    };
};

changeElPlusChildren.addEventListener('click', PlusChildren);

// по клику уменьшается кол-во детей, закрывается подсекция с вопросом и полем для выпад. списков
const MinusChildren = event => {
    if(counterChildren === 1) {
        filterQuestEl.classList.add('filter-hidden');
        filterAge.classList.add('filter-hidden');
    };
    if(counterChildren > 0) {
        const numberEl = document.querySelector('#numberChildren');
        counterChildren--;
        numberEl.innerHTML = counterChildren;
        ChildrenEl.innerHTML = `${'&nbsp;—'} ${counterChildren} ${'Children'}`;
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

// по клику увеличивается кол-во комнат
const PlusRooms = event => {
    if(counterRooms < 30) {
        const numberEl = document.querySelector('#numberRooms');
        counterRooms++;
        numberEl.innerHTML = counterRooms;
        RoomsEl.innerHTML = `${'&nbsp;—'} ${counterRooms} ${'Rooms'}`;
        changeElMinusRooms.classList.remove('filter-disabled');
        changeDisabledMinusRoomEl.classList.remove('change-disabled');
    };
    if(counterRooms >= 30) {
        changeElPlusRooms.classList.add('filter-disabled');
        changeDisabledElPlusRooms.classList.add('change-disabled');
    };
};

changeElPlusRooms.addEventListener('click', PlusRooms);

// по клику уменьшается кол-во комнат
const MinusRooms = event => {
    if(counterRooms > 1) {
        const numberEl = document.querySelector('#numberRooms');
        counterRooms--;
        numberEl.innerHTML = counterRooms;
        RoomsEl.innerHTML = `${'&nbsp;—'} ${counterRooms} ${'Rooms'}`;
        changeElPlusRooms.classList.remove('filter-disabled');
        changeDisabledElPlusRooms.classList.remove('change-disabled');
    };
    if(counterRooms <= 1) {
        changeElMinusRooms.classList.add('filter-disabled');
        changeDisabledMinusRoomEl.classList.add('change-disabled');
    }
};

changeElMinusRooms.addEventListener('click', MinusRooms);

// добавление выпад. списков при увеличении кол-ва детей
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
    if (counterChildren > 9) {
        changeElPlusChildren.removeEventListener('click', addChildSelect);
    };
};

changeElPlusChildren.addEventListener('click', addChildSelect);

// удаление выпад. списков при уменьшении кол-ва детей
const removeChildSelect = () => {
    let selects = document.querySelectorAll('.select-child-age');
    selects[selects.length - 1].remove();
};

changeElMinusChildren.addEventListener('click', removeChildSelect);



