export const showFilter = (event) => {
  filterRelatedEl.classList.toggle('filter-hidden');
};

export const plusAdults = (event) => {
  if (counterAdults < 30) {
    const numberEl = document.querySelector('#numberAdults');

    counterAdults++;

    numberEl.innerHTML = counterAdults;
    adultsEl.innerHTML = `${'&nbsp;'} ${counterAdults} ${'Adults'}`;

    changeElMinusAdults.classList.remove('filter-disabled');
    changeDisabledMinusAdultEl.classList.remove('change-disabled');
  }

  if (counterAdults >= 30) {
    changeElPlusAdults.classList.add('filter-disabled');
    changeDisabledElPlusAdults.classList.add('change-disabled');
  }
};

export const minusAdults = (event) => {
  if (counterAdults > 1) {
    const numberEl = document.querySelector('#numberAdults');
    counterAdults--;
    numberEl.innerHTML = counterAdults;
    adultsEl.innerHTML = `${'&nbsp;&nbsp;'}${counterAdults} ${'Adults'}`;
    changeElPlusAdults.classList.remove('filter-disabled');
    changeDisabledElPlusAdults.classList.remove('change-disabled');
  }

  if (counterAdults <= 1) {
    changeElMinusAdults.classList.add('filter-disabled');
    changeDisabledMinusAdultEl.classList.add('change-disabled');
  }
};

export const plusChildren = (event) => {
  if (counterChildren !== -1) {
    filterQuestEl.classList.remove('filter-hidden');
    filterAge.classList.remove('filter-hidden');
    filterRelatedEl.classList.add('filter-related-newheight');
  }

  if (counterChildren < 10) {
    const numberEl = document.querySelector('#numberChildren');
    counterChildren++;
    numberEl.innerHTML = counterChildren;
    childrenEl.innerHTML = `${'&nbsp;—'} ${counterChildren} ${'Children'}`;
    changeElMinusChildren.classList.remove('filter-disabled');
    changeDisabledMinusChildrenEl.classList.remove('change-disabled');
  }

  if (counterChildren >= 10) {
    changeElPlusChildren.classList.add('filter-disabled');
    changeDisabledPlusChildrenEl.classList.add('change-disabled');
  }
};

export const minusChildren = (event) => {
  if (counterChildren === 1) {
    filterQuestEl.classList.add('filter-hidden');
    filterAge.classList.add('filter-hidden');
  }

  if (counterChildren > 0) {
    const numberEl = document.querySelector('#numberChildren');
    counterChildren--;
    numberEl.innerHTML = counterChildren;
    childrenEl.innerHTML = `${'&nbsp;—'} ${counterChildren} ${'Children'}`;
    changeElPlusChildren.classList.remove('filter-disabled');
    changeDisabledPlusChildrenEl.classList.remove('change-disabled');
  }

  if (counterChildren <= 0) {
    changeElMinusChildren.classList.add('filter-disabled');
    changeDisabledMinusChildrenEl.classList.add('change-disabled');
    filterRelatedEl.classList.remove('filter-hidden');
    filterRelatedEl.classList.remove('filter-related-newheight');
  }
  changeElPlusChildren.addEventListener('click', addChildSelect);
};

export const plusRooms = (event) => {
  if (counterRooms < 30) {
    const numberEl = document.querySelector('#numberRooms');
    counterRooms++;
    numberEl.innerHTML = counterRooms;
    roomsEl.innerHTML = `${'&nbsp;—'} ${counterRooms} ${'Rooms'}`;
    changeElMinusRooms.classList.remove('filter-disabled');
    changeDisabledMinusRoomEl.classList.remove('change-disabled');
  }

  if (counterRooms >= 30) {
    changeElPlusRooms.classList.add('filter-disabled');
    changeDisabledElPlusRooms.classList.add('change-disabled');
  }
};

export const minusRooms = (event) => {
  if (counterRooms > 1) {
    const numberEl = document.querySelector('#numberRooms');
    counterRooms--;
    numberEl.innerHTML = counterRooms;
    roomsEl.innerHTML = `${'&nbsp;—'} ${counterRooms} ${'Rooms'}`;
    changeElPlusRooms.classList.remove('filter-disabled');
    changeDisabledElPlusRooms.classList.remove('change-disabled');
  }

  if (counterRooms <= 1) {
    changeElMinusRooms.classList.add('filter-disabled');
    changeDisabledMinusRoomEl.classList.add('change-disabled');
  }
};

export const addChildSelect = () => {
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
  }
};

export const removeChildSelect = () => {
  const selects = document.querySelectorAll('.select-child-age');
  if (selects.length <= 0) return;
  return selects[selects.length - 1].remove();
};
