const homeGuestContentDIv = document.querySelector('#home-guest-content');
const fetchData = [];

    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
        .then((response) => response.json())
        .then((data) => fetchData.push(data))
        .then((data) => fetchData.forEach((elem) => {
            homeGuestContentDIv.innerHTML += `
        <div class="home-guests-box box">
          <a href="#" class="home-guests-photo-link">
            <img class="home-guests-photo photo" src=${elem.imageUrl} alt="hotel_leopold">
          </a>
          <p class="home-hotel-name home-text"><a href="#">${elem.name}</a></p>
          <p class="home-destination home-text"><a href="#">${elem.city}, ${elem.country}</a></p>
        </div>
    `;
        }))
        .then((data) => console.log(data))
        .catch((err) => console.log('This is error', err));

