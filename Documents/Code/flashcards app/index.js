const flashCard = document.querySelector('.flash-card');
const nextBtn = document.querySelector('.next-btn');

flashCard.addEventListener('click', function() {
    flashCard.classList.toggle('flipped');
});

  async function getCountryData() {
      const resp = await fetch('https://restcountries.com/v3.1/all');
      const data = await resp.json();
      console.log(data);

      renderData(data[0]);

      function nextCountry() {
        for(data < 0; data.length <= 250; data++){
          return;
        }
      }
       nextBtn.addEventListener('click',nextCountry);

    };

  getCountryData();

function renderData(data) {

    const html = `

    <div class="card-face front">

            <h4>${data.name.common}</h4>

        </div>

        <div class="card-face back">
        <p class="region"> region: <span>${data.region}</span></p>
        <p class="capital">capital: <span>${data.capital}</span></p>
        <p class="language">language: <span>${data.languages.isl}</span></p>

    </div>

    `

    flashCard.insertAdjacentHTML("beforeend", html)
}



async function getBookData() {
  const resp = await fetch('https://wolnelektury.pl/api/authors/');
  const data = await resp.json();
  console.log(data);

};

getBookData();