var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);

var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
 for(var i=0;i<data1.length;i++){
  row.innerHTML+=`
   <div class="col-md-4">
   <div class="card border-primary mb-3" style="width: 18rem;">
  <img src="${data1[i].flags.svg}"  class="card-img-top"alt="Country flage img">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
 document.body.append(container);
 }
}




























/*const container = document.querySelector('.container');

// Fetch the list of countries from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    // Loop through each country and create a Bootstrap card for it
    countries.forEach(country => {
      const card = document.createElement('div');
      card.classList.add('card', 'col-lg-4', 'col-sm-12');

      const header = document.createElement('div');
      header.classList.add('card-header');
      header.textContent = country.name.common;
      card.appendChild(header);

      const body = document.createElement('div');
      body.classList.add('card-body');
      card.appendChild(body);

      const flag = document.createElement('img');
      flag.src = country.flags.png;
      flag.alt = `${country.name.common} flag`;
      body.appendChild(flag);

      const capital = document.createElement('p');
      capital.textContent = `Capital: ${country.capital[0]}`;
      body.appendChild(capital);

      const region = document.createElement('p');
      region.textContent = `Region: ${country.region}`;
      body.appendChild(region);

      const latlng = document.createElement('p');
      latlng.textContent = `Latlng: ${country.latlng.join(', ')}`;
      body.appendChild(latlng);

      const button = document.createElement('button');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Click for Weather';
      button.addEventListener('click', () => {
        // Fetch the current weather data for the selected country from the OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=YOUR_API_KEY`)
          .then(response => response.json())
          .then(data => {
            alert(`The weather in ${country.capital[0]} is currently ${data.weather[0].description}.`);
          })
          .catch(error => {
            console.error(error);
            alert('Error fetching weather data.');
          });
      });
      body.appendChild(button);

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error(error);
    alert('Error fetching country data.');
  });*/

