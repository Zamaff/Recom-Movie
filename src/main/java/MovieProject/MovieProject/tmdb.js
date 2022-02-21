const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_LANG = 'ko';
const BASE_REGION = 'KR';



//Trending
export const getTrending = () => {
  return `${BASE_URL}/movie/popular?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};





//Companies
export const getCompanies = () => {
  return `${BASE_URL}/company/{company_id}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};


//Movies
export const getMovies = () => {
  return `${BASE_URL}/trending/{media_type}/{time_window}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};



//Authentication
export const getAuthentication = () => {
  return `${BASE_URL}/movie/popular?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

//Account
export const getAccount= () => {
  return `${BASE_URL}/account?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};


//Review
export const getReviews = () => {
  return `${BASE_URL}/review/{review_id}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};


//search
export const getSearch = () => {
  return `${BASE_URL}/search/movie?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

//keyword
export const getKeyword = () => {
  return `${BASE_URL}/Keyword/{keyword_id}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

