
const API_KEY = "9d3ba34d1cce30fc4000f01b0f6186cf";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_ENDPOINT = "/trending/movie/day";
const SEARCH_ENDPOINT = "/search/movie";

const API_URL = `${BASE_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const ALT_IMG_URL = "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const form = document.getElementById("form") as HTMLFormElement;
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

getMovies(API_URL);

async function getMovies(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse = await response.json();
    console.log(data);
    renderMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

function renderMovies(data: Movie[]): void {
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





