const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const init = (cities) => {
  document.querySelector('input')
    .addEventListener(
      'input',
      function () {
        const { value } = this;

        if (value.length) {
          const rx = new RegExp(value, 'gi');

          const results = cities.filter(({city, state}) => {
            return city.match(rx) || state.match(rx)
          })

          if (!results.length) {
            return false;
          }

          var newList = results.map(({city, state, population}) => {
            const location = `${city}, ${state}`;

            const formattedLocation = location.replaceAll(rx, `<span class="hl">${value}</span>`);
            console.log(formattedLocation);

            return `<li>
              <span>${formattedLocation}</span>
              <span class="population">${Intl.NumberFormat().format(population)}</span>
            </li>`
          }).join('');

          document.querySelector('.suggestions').innerHTML = newList;
        } else {
          document.querySelector('.suggestions').innerHTML = "<li>Filter for a city</li><li>or a state</li>";
        }
      }
    )
}

fetch(endpoint)
  .then(response => response.json())
  .then(init)
  .catch(console.error)
