const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGEPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.querySelector('.main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);

    showMovies(respData.results) ;

}

function showMovies(movies) {

    main.innerHTML = '';

    movies.forEach(movie => {

        const {poster_path, title, vote_average, overview, release_date} = movie;

        const moviesEl = document.createElement('div');

        moviesEl.classList.add('movie');

        moviesEl.innerHTML = `

        <div class="movies">

        <img src="${IMAGEPATH + poster_path}" 
                  alt="${title}">

        <div class="movie-info">
          
          <h3>${title}</h3>
          <span class='${getClassByRate(vote_average)}'>${vote_average}</span>

        </div>

     </div>

     <div class='overview'>

     <h4>Overview</h4>
     
     ${overview}

     <h5>release date:${release_date}</h5>
     
     </div>

        `;

        main.appendChild(moviesEl);
     });

}

function getClassByRate(vote_average) {
    if(vote_average >=8) {
        return 'green'
    } else if (vote_average >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(SEARCHAPI + searchTerm)
    }
    search.value = '';
});

