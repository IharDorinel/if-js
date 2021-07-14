// Поиск отелей
const sectionEl = document.querySelector('.avail-hotels');
const availHotelsContentDiv = document.querySelector('#avail-hotels-content');
const homeGuestContentDiv = document.querySelector('#home-guest-content');
const formEl = document.querySelector('.search-form');
const filterRelatedEl = document.querySelector('.filter-related');
const availNotEl = document.querySelector('#avail-not');

import {takeFormValue} from './utils';

formEl.addEventListener('submit', takeFormValue);



// Сортировка пузырьком секции Homes guests loves
import {bubbleSort} from './utils';

import {pushFetchData} from './utils';


fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((data) => bubbleSort(data))
  .then((data) => pushFetchData(data))
  .catch((err) => console.log('This is error', err));


// фильтр
const relatedEl = document.querySelector('.related');

const adultsEl = document.querySelector('#adults');
const childrenEl = document.querySelector('#children');
const roomsEl = document.querySelector('#rooms');

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
import {showFilter} from './filter';
relatedEl.addEventListener('click', showFilter);

// по клику увеличивается кол-во взрослых
import {plusAdults} from './filter';
changeElPlusAdults.addEventListener('click', plusAdults);

// по клику уменьшается кол-во взрослых
import {minusAdults} from './filter';
changeElMinusAdults.addEventListener('click', minusAdults);

// по клику увеличивается кол-во детей, открывается подсекция с вопросом и полем для выпад. списков
import {plusChildren} from './filter';
changeElPlusChildren.addEventListener('click', plusChildren);

// по клику уменьшается кол-во детей, закрывается подсекция с вопросом и полем для выпад. списков
import {minusChildren} from './filter';
changeElMinusChildren.addEventListener('click', minusChildren);

// по клику увеличивается кол-во комнат
import {plusRooms} from './filter';
changeElPlusRooms.addEventListener('click', plusRooms);

// по клику уменьшается кол-во комнат
import {minusRooms} from './filter';
changeElMinusRooms.addEventListener('click', minusRooms);


// добавление выпад. списков при увеличении кол-ва детей
import {addChildSelect} from './filter';
changeElPlusChildren.addEventListener('click', addChildSelect);

// удаление выпад. списков при уменьшении кол-ва детей
import {removeChildSelect} from './filter';
changeElMinusChildren.addEventListener('click', removeChildSelect);



