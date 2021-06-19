const homeGuestContentDiv = document.querySelector('#home-guest-content');
const fetchData = [];

const fetch = fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((data) => pushFetchData(data))
    .catch((err) => console.log('This is error', err));

const pushFetchData = () => {
  fetchData.push(fetch);
  if(fetchData.length !== 0)
  { fetchData.forEach((elem) => {
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






