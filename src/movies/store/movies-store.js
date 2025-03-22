import { Movie } from "../models/movie"
import { loadMoviesByPage } from "../uses-cases/load-movies-by-page"


const state = {
    currentPage: 0,
    movies: [],
    pages: 1,
}

const loadNextPage = async() => {
    
    if(state.currentPage >= state.pages) return;
    
    const { data, pages } = await loadMoviesByPage(state.currentPage + 1);
    
    if(data.length === 0) return;
    
    state.movies = data;
    state.currentPage += 1;
    state.pages = pages;
    
    
    // console.log(state);
    
}

const loadPreviousPage = async() =>{

    if(state.currentPage <= 1) return;

    const movies = await loadMoviesByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.movies = movies.data;
    state.pages = movies.pages;
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
