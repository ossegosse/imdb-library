/* const api_key = "api_key=9d3ba34d1cce30fc4000f01b0f6186cf";
const baseUrl = "https://api.themoviedb.org/3";
const apiTrending = "api.themoviedb.org/3/trending/movie/day?api_key=9d3ba34d1cce30fc4000f01b0f6186cf";
const apiUrl = baseUrl+"/trending/movie/day?"+api_key;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const altImgUrl = "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const searchUrl = baseUrl+"/search/movie?"+api_key;

const form = document.getElementById("form");
const searchBar = document.getElementById("searchBar") as HTMLInputElement;
const container = document.getElementById("container");


// API
interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface ApiResponse {
  results: Movie[];
}

getMovies(apiUrl)

async function getMovies(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // definiera datatyp
    const data: ApiResponse = await response.json();
    console.log(data);
    renderMovies(data.results)
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

function renderMovies (data: any[]): void {
  container.innerHTML = ""

  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie
    const formattedVoteAverage = parseFloat(vote_average).toFixed(1)
    const posterSrc = poster_path ? imgUrl + poster_path : altImgUrl;
    const movieEl = document.createElement("div")
    movieEl.classList.add("movieCard")
    movieEl.innerHTML = `
    <img src="${posterSrc}"
    alt="${title}"
    class="poster"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="rating">${formattedVoteAverage}</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    ${overview}
  </div>`

  container.appendChild(movieEl)
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchBar.value;
    if (searchTerm) {
      getMovies(searchUrl+"&query="+searchTerm)
    }
    else {
      getMovies(apiUrl)
    }
}) */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = "9d3ba34d1cce30fc4000f01b0f6186cf";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_ENDPOINT = "/trending/movie/day";
const SEARCH_ENDPOINT = "/search/movie";
const API_URL = `${BASE_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const ALT_IMG_URL = "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const form = document.getElementById("form");
const searchBar = document.getElementById("searchBar");
const container = document.getElementById("container");
getMovies(API_URL);
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
        const formattedVoteAverage = vote_average.toFixed(1);
        const posterSrc = poster_path ? `${IMG_URL}${poster_path}` : ALT_IMG_URL;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movieCard");
        movieEl.innerHTML = `
      <img src="${posterSrc}" alt="${title}" class="poster" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="rating">${formattedVoteAverage}</span>
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
    const searchTerm = searchBar.value.trim();
    const url = searchTerm ? `${BASE_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}&query=${searchTerm}` : API_URL;
    getMovies(url);
});
