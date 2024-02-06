var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api_key = "api_key=9d3ba34d1cce30fc4000f01b0f6186cf";
const baseUrl = "https://api.themoviedb.org/3";
const apiTrending = "api.themoviedb.org/3/trending/movie/day?api_key=9d3ba34d1cce30fc4000f01b0f6186cf";
const apiUrl = baseUrl + "/trending/movie/day?" + api_key;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const searchUrl = baseUrl + "/search/movie?" + api_key;
const form = document.getElementById("form");
const searchBar = document.getElementById("searchBar");
const container = document.getElementById("container");
getMovies(apiUrl);
function getMovies(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = yield response.json();
            console.log(data);
            renderMovies(data.results);
        }
        catch (error) {
            console.error('Error fetching movies:', error);
        }
    });
}
function renderMovies(data) {
    container.innerHTML = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movieCard");
        movieEl.innerHTML = `
    <img src="${imgUrl + poster_path}"
    alt="${title}"
    class="poster"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="rating">${vote_average}</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    ${overview}
  </div>`;
        container.appendChild(movieEl);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchBar.value;
    if (searchTerm) {
        getMovies(searchUrl + "&query=" + searchTerm);
    }
});
/* interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  // Add more fields as needed
}

interface MovieResponse {
  page: number;
  results: Movie[];
}

/* const apiArray : DataObject[] = []; */
/* // Skapa ett gränssnitt för dataobjektet om det behövs
interface DataObject {
  // Definiera attributen för dataobjektet här
  attribute1: string;
  attribute2: number;
  // ...
} */
