const key='fee26a24ccab7d6bdf02bdb967ce8321';

const requests={
    favouritemovies:'https://api.themoviedb.org/3/account/20960611/favorite/movies?api_key= ${key}',
    watchlist:'https://api.themoviedb.org/3/account/20960611/watchlist/movies?api_key=${key}',
    ratedmovies:'https://api.themoviedb.org/3/account/20960611/rated/movies?api_key=${key}',
    ratedtv:'https://api.themoviedb.org/3/account/20960611/rated/tv?api_key=${key}',
};
export default requests;