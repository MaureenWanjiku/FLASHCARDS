const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// let getCountryData = function(country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//             <article class="country">

//                 <img class="country__img" src="${data.flags.png}"/>

//                 <div class="country__data">

//                     <p class="country__name"><span>Country:</span>${data.name.common}</p>

//                     <p class="country__capital"><span>Capital:</span>${data.capital[0]}</p>

//                     <p class="country__region"><span>Region:</span>${data.region}</p>

//                     <p class="country__row"><span>Language:</span>${data.languages.ita}</p>

//                     <p class="country__row"><span>Currencies:</span>${data.currencies.EUR.name}</p>

//                     <p class="time__zone"><span>Time Zone:</span>${data.timezones}</p>

//                     <p class="country__row"><span>Population:</span>${data.population} </p>

//                 </div>

//             </article>
//     `;
//     console.log(html)

//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1;
// });
// };

// getCountryData('italy');
// getCountryData('germany'); 
// // getCountryData('belgium');
// // getCountryData('australia');


const getCountryData = async (countryName) => {
    try {
        
       const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

       const data = await response.json()

       renderCountry(data[0]);

       const neighborResponse = await fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)

       const neighborData = await neighborResponse.json()
       
       renderCountry(neighborData[0]);

    } catch (error) {
        console.log(error)
    }
}
getCountryData('portugal');


// const getCountryData = (countryName) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         .then((response) => response.json())
//         .then((data) => {
//             renderCountry(data[0]);
//             return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
//         })
//         .then((response) => response.json())
//         .then((data) => renderCountry(data[0]))
//         .catch((error) => {
//             console.log(error)
//         })
// }

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
    
// };
// getCountryData('italy');
// getCountryData('spain');
// getCountryData('greece');




  function renderCountry(data) {
    // Home work
    const languageKey = Object.keys(data.languages)[0]
     const html = `
                  <article class="country">
    
                      <img class="country__img" src="${data.flags.png}"/>
    
                      <div class="country__data">
    
                          <p class="country__name"><span>Country:</span>${data.name.common}</p>
    
                          <p class="country__capital"><span>Capital:</span>${data.capital}</p>
    
                          <p class="country__region"><span>Region:</span>${data.region}</p>
    
                          <p class="country__row"><span>Language:</span>${data.languages[languageKey]}</p>
    
                          <p class="country__row"><span>Currencies:</span>${data.currencies.EUR.name}</p>
    
                          <p class="time__zone"><span>Time Zone:</span>${data.timezones}</p>
    
                            <p class="country__row"><span>Population:</span>${data.population} </p>
    
                      </div>
    
                  </article>
          `;
        //   console.log(html)
    
          countriesContainer.insertAdjacentHTML('beforeend', html)
          countriesContainer.style.opacity = 1;
      };
 
// let getCountryDataAndNeighbour = function(country) {
//      const request = new XMLHttpRequest();
//      request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//      request.send();
    
//      request.addEventListener('load', function() {
//          const [data] = JSON.parse(this.responseText);
//          console.log(data);

//          //getting the first country
//          renderCountry(data); 

//          //getting the neighbour country
//          const [neighbour] = data.borders;

//          if(!neighbour) return;
            
//      const request2 = new XMLHttpRequest();
//      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//      request2.send();

//      request2.addEventListener('load', function() {
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2)

//      });
//      }); 
//     }; 
//      getCountryDataAndNeighbour('italy');   