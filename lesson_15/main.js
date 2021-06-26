// Поиск отелей
const availHotelsContentDiv = document.querySelector('#home-guest-content');
const formEl = document.querySelector('.search-form');
const buttonEl = document.querySelector('.submit-button');

const takeFormValue = (event) => {
    const search = formEl.querySelector('[name="destination"]')
    const adults = formEl.querySelector('#numberAdults');
    const rooms = formEl.querySelector('#numberRooms');
    const children = formEl.querySelectorAll('select');

    const childrenArr = [];
    children.forEach(child => {
        childrenArr.push(child.value);
    });

    const values = {
        search: search.value,
        adults: adults.innerHTML,
        children: childrenArr.join(','),
        rooms: rooms.innerHTML
    };

    console.log(values);

    const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
    const params = {search: values.search,
        adults: values.adults,
        children: values.children,
        rooms: values.rooms};
    url.search = new URLSearchParams(params).toString();

    const searchAvail = (data) => {
        if (data.length !== 0) {
            data.forEach((elem) => {
                availHotelsContentDiv.innerHTML += `
        <div class="home-guests-box box">
          <a href="#" class="home-guests-photo-link">
            <img class="home-guests-photo photo" src=${elem.imageUrl} alt="hotel_leopold">
          </a>
          <p class="home-hotel-name home-text"><a href="#">${elem.name}</a></p>
          <p class="home-destination home-text"><a href="#">${elem.city}, ${elem.country}</a></p>
        </div>
    `;
            })
        }
    };

    const getRequest = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => searchAvail(data))
            .catch(err => console.log('This is error', err));
    };

    getRequest();

}

buttonEl.addEventListener('submit', takeFormValue)


// фильтр
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
const showFilter = event => {
    FilterRelatedEl.classList.remove('filter-hidden');
};
RelatedEl.addEventListener('click', showFilter);

// по клику увеличивается кол-во взрослых
const plusAdults = event => {
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

changeElPlusAdults.addEventListener('click', plusAdults);

// по клику уменьшается кол-во взрослых
const minusAdults = event => {
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

changeElMinusAdults.addEventListener('click', minusAdults);

// по клику увеличивается кол-во детей, открывается подсекция с вопросом и полем для выпад. списков
const plusChildren = event => {
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

changeElPlusChildren.addEventListener('click', plusChildren);

// по клику уменьшается кол-во детей, закрывается подсекция с вопросом и полем для выпад. списков
const minusChildren = event => {
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
    changeElPlusChildren.addEventListener('click', addChildSelect);
};

changeElMinusChildren.addEventListener('click', minusChildren);

// по клику увеличивается кол-во комнат
const plusRooms = event => {
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

changeElPlusRooms.addEventListener('click', plusRooms);

// по клику уменьшается кол-во комнат
const minusRooms = event => {
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

changeElMinusRooms.addEventListener('click', minusRooms);

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
    if(selects.length <= 0) return;
    return selects[selects.length - 1].remove();
};

changeElMinusChildren.addEventListener('click', removeChildSelect);