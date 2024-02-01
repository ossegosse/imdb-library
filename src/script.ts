
// base-url: https://api.themoviedb.org/3/movie/550?api_key=9d3ba34d1cce30fc4000f01b0f6186cf
// API Key: 9d3ba34d1cce30fc4000f01b0f6186cf

/* import config from "./config.json";
console.log(config.api_key); */

fetch('https://api.themoviedb.org/3/movie/550?api_key=9d3ba34d1cce30fc4000f01b0f6186cf')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

