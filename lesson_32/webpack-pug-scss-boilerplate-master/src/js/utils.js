export const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].name > data[j+1].name) {
        let tmp = data[j+1];
        data[j+1] = data[j];
        data[j] = tmp;
      }
    }
  }
  return data;
};

export const pushFetchData = (data) => {
  if(data.length !== 0) {
    data.forEach((elem) => {
      homeGuestContentDiv.innerHTML += `
        <div class="home-guests-box box">
          <a href="#" class="home-guests-photo-link">
            <img class="home-guests-photo photo" src=${elem.imageUrl} alt="hotel_leopold">
          </a>
          <p class="home-hotel-name home-text"><a href="#">${elem.name}</a></p>
          <p class="home-destination home-text"><a href="#">${elem.city}, ${elem.country}</a></p>
        </div>
    `;
    })}
};

export const takeFormValue = (event) => {
  event.preventDefault();

  const search = formEl.querySelector('[name="destination"]');
  const adults = document.querySelector('#numberAdults');
  const rooms = document.querySelector('#numberRooms');
  const children = document.querySelectorAll('select');

  const childrenArr = [];
  children.forEach((child) => {
    childrenArr.push(child.value);
  });

  const values = {
    search: search.value,
    adults: adults.innerHTML,
    children: childrenArr.join(','),
    rooms: rooms.innerHTML,
  };

  const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
  const params = {
    search: values.search,
    adults: values.adults,
    children: values.children,
    rooms: values.rooms,
  };
  url.search = new URLSearchParams(params).toString();

  const searchAvail = (data) => {
    sectionEl.classList.remove('filter-hidden');
    availHotelsContentDiv.innerHTML = '';

    if (data.length !== 0) {
      data.forEach((elem) => {
        availHotelsContentDiv.innerHTML += `
        <div class="avail-hotels-box box">
          <a href="#" class="avail-hotels-photo-link">
            <img class="avail-hotels-photo photo" src=${elem.imageUrl} alt="hotel_leopold">
          </a>
          <p class="home-hotel-name home-text"><a href="#">${elem.name}</a></p>
          <p class="home-destination home-text"><a href="#">${elem.city}, ${elem.country}</a></p>
        </div>
    `;
      });
      availNotEl.classList.add('filter-hidden');

    } else {
      sectionEl.classList.add('filter-hidden');
      availNotEl.classList.remove('filter-hidden');
    };
  };

  const getRequest = (url) => {
    if(params.search.length !== 0) {
      fetch(url)
        .then(response => response.json())
        .then(data => searchAvail(data))
        .catch(err => console.log('This is error', err));
      filterRelatedEl.classList.add('filter-hidden');
    } else {
      sectionEl.classList.add('filter-hidden');
      availNotEl.classList.add('filter-hidden');
    }
  };

  getRequest(url);

};


