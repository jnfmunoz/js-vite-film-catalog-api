import { Movie } from "../models/movie"
import { loadMoviesByPage } from "../uses-cases/load-movies-by-page"


const state = {
    currentPage: 0,
    movies: [],
}

const loadNextPage = async() => {
    
    const movies = await loadMoviesByPage(state.currentPage + 1);
    if(movies.length === 0) return;

    state.currentPage += 1;
    state.movies = movies;
    // console.log(state);

}

const loadPreviousPage = async() =>{
    throw new Error('no implementado');
}

const reloadPage = async() =>{
    throw new Error('no implementado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    reloadPage,

    /**
     * 
     * @returns {Movie[]}
     */
    getMovies: () => [ ...state.movies ],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}
